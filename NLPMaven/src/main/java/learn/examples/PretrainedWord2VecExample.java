package learn.examples;

import org.deeplearning4j.models.word2vec.Word2Vec;
import org.deeplearning4j.models.embeddings.loader.WordVectorSerializer;
import org.nd4j.linalg.api.ndarray.INDArray;

import java.io.File;

public class PretrainedWord2VecExample {

    public static void main(String[] args) throws Exception {
        // Path to the pretrained Word2Vec model file
        File modelFile = new File("src/main/resources/GoogleNews-vectors-negative300.bin");

        // Load the pretrained Word2Vec model
        Word2Vec word2Vec = WordVectorSerializer.readWord2VecModel(modelFile);

        // Use the pretrained Word2Vec model
        // Example 1: Find the top 10 closest words to 'university'
        System.out.println("Closest words to 'university': " + word2Vec.wordsNearest("university", 10));

        // Example 2: Find the cosine similarity between two words
        double similarity = word2Vec.similarity("university", "school");
        System.out.println("Similarity between 'university' and 'school': " + similarity);

        // Example 3: Get the vector for a word
        INDArray wordVector = word2Vec.getWordVectorMatrix("university");
        System.out.println("Vector for 'university': " + wordVector);
    }
}
