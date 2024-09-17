package learn.nlp.domain;

import freemarker.cache.StrongCacheStorage;
import org.deeplearning4j.models.word2vec.Word2Vec;
import org.deeplearning4j.models.embeddings.loader.WordVectorSerializer;
import org.nd4j.linalg.api.ndarray.INDArray;
import org.nd4j.linalg.ops.transforms.Transforms;
import edu.stanford.nlp.pipeline.*;
import edu.stanford.nlp.ling.*;
import edu.stanford.nlp.sentiment.SentimentCoreAnnotations;
import edu.stanford.nlp.util.*;

import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class NLPService {
    // Path to the pretrained Word2Vec model file
    private String modelFile = "src/main/resources/GoogleNews-vectors-negative300.bin";

    // Load the pretrained Word2Vec model
    private final Word2Vec word2Vec = WordVectorSerializer.readWord2VecModel(modelFile);

    public double wordToWordSimilarity(String word1, String word2) {
        if (word1 == null || word2 == null || word1.isEmpty() || word2.isEmpty()) {
            return -1;
        }
        // Find the cosine similarity between two words
        double similarity = word2Vec.similarity(word1, word2);
        return similarity;
    }

    public String[] closestWords(String word, int n) {
        if (word == null || n <= 0 || n > word2Vec.vocab().numWords() || word.isEmpty()) {
            return new String[0];
        }
        // Find the top n closest words to the given word
        return word2Vec.wordsNearest(word, n).toArray(new String[0]);
    }

    public INDArray getWordVector(String word) {
        if (word == null) {
            return null;
        }
        // Get the vector for a word
        return word2Vec.getWordVectorMatrix(word);
    }

    public double wordToDocumentSimilarity(String word, String document) {

        if (word == null || document == null || document.isEmpty() || word.isEmpty()) {
            return -1;
        }

        // Compute the vector for the word
        INDArray wordVector = word2Vec.getWordVectorMatrix(word);

        // Compute the document vector by averaging the word vectors of the document's words
        INDArray documentVector = getDocumentVector(word2Vec, document);

        if (wordVector != null && documentVector != null) {
            // Compute cosine similarity between the word and the document
            double similarity = Transforms.cosineSim(wordVector, documentVector);
            return similarity;
        } else {
            return -1;
        }
    }

    // Method to compute the average word vector for the document
    private static INDArray getDocumentVector(Word2Vec word2Vec, String document) {
        String[] words = document.split("\\s+");
        INDArray documentVector = null;
        int count = 0;

        for (String word : words) {
            INDArray wordVector = word2Vec.getWordVectorMatrix(word);
            if (wordVector != null) {
                if (documentVector == null) {
                    documentVector = wordVector.dup();
                } else {
                    documentVector.addi(wordVector);  // Add word vectors
                }
                count++;
            }
        }

        if (documentVector != null && count > 0) {
            documentVector.divi(count);  // Take the average of the word vectors // this is called the centroid vector!!
        }

        return documentVector;
    }

    public String getSentiment(String text) {

        if (text == null || text.isEmpty()) {
            return null;
        }

        // Create a StanfordCoreNLP object and set properties
        Properties props = new Properties();
        props.setProperty("ner.useSUTime", "0");
        props.setProperty("annotators", "tokenize,ssplit,pos,lemma,ner,parse,sentiment");
        StanfordCoreNLP pipeline = new StanfordCoreNLP(props);

        // Create an Annotation object with the input text
        Annotation annotation = new Annotation(text);

        // Run the sentiment analysis
        pipeline.annotate(annotation);

        // Get the sentiment of the text
        String sentiment = annotation.get(CoreAnnotations.SentencesAnnotation.class)
                .get(0).get(SentimentCoreAnnotations.SentimentClass.class);

        return sentiment;
    }

    public String getNamedEntities(String text) {

        if (text == null || text.isEmpty()) {
            return null;
        }

        Properties props = new Properties();
        props.setProperty("ner.useSUTime", "0");

        props.setProperty("annotators", "tokenize,ssplit,pos,lemma,ner,parse,sentiment");
        StanfordCoreNLP pipeline = new StanfordCoreNLP(props);


        // Create a StanfordCoreNLP object and set properties

        // Create an Annotation object with the input text
        Annotation annotation = new Annotation(text);

        // Run the named entity recognition
        pipeline.annotate(annotation);

        // Get the named entities from the text
        StringBuilder namedEntities = new StringBuilder();
        List<CoreMap> sentences = annotation.get(CoreAnnotations.SentencesAnnotation.class);
        for (CoreMap sentence : sentences) {
            for (CoreLabel token : sentence.get(CoreAnnotations.TokensAnnotation.class)) {
                String word = token.get(CoreAnnotations.TextAnnotation.class);
                String ner = token.get(CoreAnnotations.NamedEntityTagAnnotation.class);
                if (!ner.equals("O")) {
                    namedEntities.append(word).append(" -> ").append(ner).append("\n");
                }
            }
        }

        return namedEntities.toString();
    }



}
