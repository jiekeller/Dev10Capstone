package learn.nlp.domain;
import learn.nlp.models.Author;
import learn.nlp.models.Category;
import learn.nlp.models.Story;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
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
        double result = service.wordToWordSimilarity(word1, word2);
        assertTrue(result > 0.0);
    }

    @Test
    void shouldFindClosestWords() {
        String word = "cat";
        int n = 5;
        String[] result = service.closestWords(word, n);
        assertNotNull(result);
        assertEquals(n, result.length);
    }

    @Test
    void shouldFindWordVector() {
        String word = "cat";
        double[] result = service.getWordVector(word).toDoubleVector();
        assertNotNull(result);
        assertTrue(result.length > 0);
    }

    @Test
    void shouldFindWordToDocumentSimilarity() {
        String word = "cat";
        String document = "The cat sat on the mat";
        double result = service.wordToDocumentSimilarity(word, document);
        assertTrue(result > 0.0);
    }

    @Test
    void shouldNotFindWordToDocumentSimilarity() {
        String word = "cat";
        String document = "The dog sat on the mat";
        double result = service.wordToDocumentSimilarity(word, document);
        assertTrue(result < 0.5);
    }

    @Test
    void shouldNotFindWordToDocumentSimilarityForNullWord() {
        String word = null;
        String document = "The cat sat on the mat";
        double result = service.wordToDocumentSimilarity(word, document);
        assertEquals(-1, result);
    }

    @Test
    void shouldNotFindWordToDocumentSimilarityForNullDocument() {
        String word = "cat";
        String document = null;
        double result = service.wordToDocumentSimilarity(word, document);
        assertEquals(-1, result);
    }

    @Test
    void shouldFindSentiment() {
        String text = "This is a great movie!";
        String result = service.getSentiment(text);
        assertNotNull(result);
    }

    @Test
    void shouldNotFindSentimentForNullText() {
        String text = null;
        String result = service.getSentiment(text);
        assertNull(result);
    }

    @Test
    void shouldNotFindSentimentForEmptyText() {
        String text = "";
        String result = service.getSentiment(text);
        assertNull(result);
    }

    @Test
    void shouldFindSentimentForNegativeText() {
        String text = "This is a terrible movie!";
        String result = service.getSentiment(text);
        assertNotNull(result);
    }

    @Test
    void shouldFindNER() {
        String text = "George Washington was the first president of the United States.";
        String result = service.getNamedEntities(text);
        assertNotNull(result);
        System.out.println(result);
        assertTrue(!result.isEmpty());
    }

}
