package learn.nlp.examples;

import edu.stanford.nlp.pipeline.*;
import edu.stanford.nlp.ling.*;
import edu.stanford.nlp.sentiment.SentimentCoreAnnotations;
import edu.stanford.nlp.util.*;

import java.util.*;

public class CoreNLPSentimentNERExample {

    public static void main(String[] args) {
        // Create a StanfordCoreNLP object with POS, NER, parse, sentiment annotators
        Properties props = new Properties();
        props.setProperty("ner.useSUTime", "0");
        props.setProperty("annotators", "tokenize,ssplit,pos,lemma,ner,parse,sentiment");
        StanfordCoreNLP pipeline = new StanfordCoreNLP(props);

        // Input text for analysis
        String text = "Stanford University is located in California. It is a great place to study. I feel happy about my studies.";

        // Create an empty Annotation with the text
        Annotation document = new Annotation(text);

        // Run all the selected annotators on the text
        pipeline.annotate(document);

        // Sentiment Analysis: Go through each sentence and extract the sentiment
        System.out.println("Sentiment Analysis:");
        List<CoreMap> sentences = document.get(CoreAnnotations.SentencesAnnotation.class);
        for (CoreMap sentence : sentences) {
            String sentiment = sentence.get(SentimentCoreAnnotations.SentimentClass.class);
            System.out.println(sentence + " -> Sentiment: " + sentiment);
        }

        // Named Entity Recognition (NER): Go through each word and extract named entities
        System.out.println("\nNamed Entity Recognition (NER):");
        for (CoreMap sentence : sentences) {
            for (CoreLabel token : sentence.get(CoreAnnotations.TokensAnnotation.class)) {
                String word = token.get(CoreAnnotations.TextAnnotation.class);
                String ner = token.get(CoreAnnotations.NamedEntityTagAnnotation.class);
                System.out.println(word + " -> NER: " + ner);
            }
        }
    }
}
