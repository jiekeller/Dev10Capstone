package learn.nlp.domain;
import learn.nlp.models.Author;
import learn.nlp.models.Category;
import learn.nlp.models.Story;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.nd4j.linalg.api.ndarray.INDArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
public class NLPServiceTest {

    @Autowired
    public NLPService service;

    @Test
    void shouldFindWordToWordSimilarity() {
        String word1 = "cat";
        String word2 = "dog";
        Result<Double> result = service.wordToWordSimilarity(word1, word2);
        assertTrue(result.getPayload() > 0.0);
    }

    @Test
    void shouldFindClosestWords() {
        String word = "cat";
        int n = 5;
        Result<String[]> result = service.closestWords(word, n);
        assertNotNull(result);
        assertEquals(n, result.getPayload().length);
    }

    @Test
    void shouldFindWordVector() {
        String word = "cat";
        Result<INDArray> result = service.getWordVector(word);
        assertNotNull(result.getPayload());
        assertTrue(result.getPayload().length() > 0);
    }

    @Test
    void shouldFindWordToDocumentSimilarity() {
        String word = "cat";
        String document = "The cat sat on the mat";
        Result<Double> result = service.wordToDocumentSimilarity(word, document);
        assertTrue(result.getPayload() > 0.0);
    }

    @Test
    void shouldNotFindWordToDocumentSimilarity() {
        String word = "cat";
        String document = "The dog sat on the mat";
        Result<Double> result = service.wordToDocumentSimilarity(word, document);
        assertTrue(result.getPayload() < 0.5);
    }

    @Test
    void shouldNotFindWordToDocumentSimilarityForNullWord() {
        String word = null;
        String document = "The cat sat on the mat";
        Result<Double> result = service.wordToDocumentSimilarity(word, document);
        assertEquals(null, result.getPayload());
    }

    @Test
    void shouldNotFindWordToDocumentSimilarityForNullDocument() {
        String word = "cat";
        String document = null;
        Result<Double> result = service.wordToDocumentSimilarity(word, document);
        assertEquals(null, result.getPayload());
    }

    @Test
    void shouldFindSentiment() {
        String text = "This is a great movie!";
        Result<String> result = service.getSentiment(text);
        assertNotNull(result.getPayload());
    }

    @Test
    void shouldNotFindSentimentForNullText() {
        String text = null;
        Result<String> result = service.getSentiment(text);
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotFindSentimentForEmptyText() {
        String text = "";
        Result<String> result = service.getSentiment(text);
        assertNull(result.getPayload());
    }

    @Test
    void shouldFindSentimentForNegativeText() {
        String text = "This is a terrible movie!";
        Result<String> result = service.getSentiment(text);
        assertNotNull(result.getPayload());
    }

    @Test
    void shouldFindNER() {
        String text = "George Washington was the first president of the United States.";
        Result<String> result = service.getNamedEntities(text);
        assertNotNull(result);
        System.out.println(result);
        assertTrue(!result.getPayload().isEmpty());
    }

}
