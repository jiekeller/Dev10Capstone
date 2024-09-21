package learn.nlp.data;

import learn.nlp.models.Author;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
public class AuthorJdbcTemplateRepositoryTest {

    @Autowired
    private AuthorJdbcTemplateRepository repository;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    static boolean hasSetup = false;

    @BeforeEach
    void setup() {
        if (!hasSetup) {
            hasSetup = true;
            jdbcTemplate.update("call set_known_good_state();");
        }
    }

    @Test
    void shouldFindByName() {
        List<Author> result = repository.findByNameContains("George");
        assertNotNull(result);
        assertFalse(result.isEmpty());
    }

    @Test
    void shouldFindById() {
        Author result = repository.findById(1);
        assertNotNull(result);
    }

    @Test
    void shouldAdd() {
        Author author = new Author();
        author.setName("New Author");
        author.setDescription("2021-01-01");
        Author result = repository.add(author);
        assertNotNull(result);
    }

    @Test
    void shouldDelete() {
        boolean result = repository.deleteById(1);
        assertTrue(result);
    }


}
