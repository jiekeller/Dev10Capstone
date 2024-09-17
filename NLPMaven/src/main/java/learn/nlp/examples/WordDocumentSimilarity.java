package learn.nlp.examples;

import org.deeplearning4j.models.embeddings.loader.WordVectorSerializer;
import org.deeplearning4j.models.word2vec.Word2Vec;
import org.nd4j.linalg.api.ndarray.INDArray;
import org.nd4j.linalg.ops.transforms.Transforms;

import java.io.File;
import java.util.Arrays;

public class WordDocumentSimilarity {

    public static void main(String[] args) throws Exception {
        // Path to the pretrained Word2Vec model
        File modelFile = new File("src/main/resources/GoogleNews-vectors-negative300.bin");

        // Load the pretrained Word2Vec model
        Word2Vec word2Vec = WordVectorSerializer.readWord2VecModel(modelFile);

        // The word for similarity comparison
        String word = "education";

        // Example document (as a sentence or group of words)
        String document = "Stanford University is one of the best universities in the world.";

        // Compute the vector for the word
        INDArray wordVector = word2Vec.getWordVectorMatrix(word);

        // Compute the document vector by averaging the word vectors of the document's words
        INDArray documentVector = getDocumentVector(word2Vec, document);

        if (wordVector != null && documentVector != null) {
            // Compute cosine similarity between the word and the document
            double similarity = Transforms.cosineSim(wordVector, documentVector);
            System.out.println("Similarity between '" + word + "' and document: " + similarity);
        } else {
            System.out.println("One of the vectors (word or document) is null.");
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
}
