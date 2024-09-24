package learn.nlp.data;

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
public class StoryJdbcTemplateRepositoryTest {

    @Autowired
    private StoryJdbcTemplateRepository repository;

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
    void shouldFindAll() throws DataAccessException {
        List<Story> result = repository.findAll();
        assertNotNull(result);
        assertFalse(result.isEmpty());

        Author author = new Author();

        author.setId(1);
        author.setName("George Orwell");
        author.setDescription(null);

        Story story = new Story();
        story.setId(1);
        story.setDescription(null);
        story.setAuthor(author);
        story.setPublishedDate(null);
        story.setTitle("Steelheart");
        story.setText("This was a book about steel, and his name was heart");
        story.setCategory(Category.DOCUMENT);

        assertTrue(result.size() >= 1);
    }

    @Test
    void shouldFindById() throws DataAccessException {
        Story story = repository.findById(1);
        assertNotNull(story);
        System.out.println(story);
        assertEquals(Category.POEM, story.getCategory());
    }

    @Test
    void shouldNotFindMissingId() throws DataAccessException {
        Story story = repository.findById(1000);
        assertNull(story);
    }

    @Test
    void shouldAdd() throws DataAccessException {
        Story story = new Story();
        story.setTitle("The Hobbit");
        story.setPublishedDate("1937-09-21");
        story.setText("In a hole in the ground there lived a hobbit.");
        story.setDescription("A hobbit is hired to steal a dragon's treasure.");
        story.setAuthor(new Author(1, "J.R.R. Tolkien", null));
        story.setCategory(Category.SHORT_STORY);

        Story actual = repository.add(story);
        assertNotNull(actual);
        assertEquals(2, actual.getId());
    }

    @Test
    void shouldNotAddNull() throws DataAccessException {
        Story story = null;
        Story actual = repository.add(story);
        assertNull(actual);
    }

    @Test
    void shouldUpdate() throws DataAccessException {
        Story story = new Story();
        story.setId(1);
        story.setTitle("Steelheart");
        story.setPublishedDate("2021-01-01");
        story.setText("This was a book about steel, and his name was heart");
        story.setDescription("A book about steel");
        story.setAuthor(new Author(1, "George Orwell", null));
        story.setCategory(Category.DOCUMENT);

        assertTrue(repository.update(story));
        Story actual = repository.findById(1);
    }

    @Test
    void shouldNotUpdateMissingId() throws DataAccessException {
        Story story = new Story();
        story.setId(1000);
        story.setTitle("Steelheart");
        story.setPublishedDate("2021-01-01");
        story.setText("This was a book about steel, and his name was heart");
        story.setDescription("A book about steel");
        story.setAuthor(new Author(1, "George Orwell", null));
        story.setCategory(Category.DOCUMENT);

        assertFalse(repository.update(story));
    }

    @Test
    void shouldDelete() throws DataAccessException {
        Story story = new Story();
        story.setText("this book about wolf");
        story.setTitle("Wolf");
        story.setPublishedDate("2021-01-01");
        story.setDescription("A book about wolf");
        story.setAuthor(new Author(1, "George Orwell", null));
        story.setCategory(Category.DOCUMENT);

        int storyId = repository.add(story).getId();
        assertTrue(repository.deleteById(storyId));
        assertNull(repository.findById(storyId));
    }

    @Test
    void shouldNotDeleteMissingId() throws DataAccessException {
        assertFalse(repository.deleteById(1000));
    }



}
