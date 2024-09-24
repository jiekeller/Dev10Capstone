package learn.nlp.domain;

import learn.nlp.data.DataAccessException;
import learn.nlp.data.StoryRepository;
import learn.nlp.models.Author;
import learn.nlp.models.Category;
import learn.nlp.models.Story;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
public class StoryServiceTest {
    @Autowired
    StoryService service;

    @MockBean
    StoryRepository repository;

    @Test
    void shouldFindAll() throws DataAccessException {
        when(repository.findAll()).thenReturn(List.of(getStory()));

        List<Story> stories = service.findAll();

        assertEquals(1, stories.size());
    }

    @Test
    void shouldFindById() throws DataAccessException {
        Story expected = getStory();
        when(repository.findById(1)).thenReturn(expected);

        Story actual = service.findById(1);

        assertEquals(expected, actual);
    }

    @Test
    void shouldNotFindById() throws DataAccessException {
        when(repository.findById(1000)).thenReturn(null);

        Story actual = service.findById(1000);

        assertEquals(null, actual);
    }

    @Test
    void shouldAdd() throws DataAccessException {
        Story story = getStory();
        story.setId(0);
        when(repository.add(story)).thenReturn(story);

        Result<Story> result = service.add(story);

        assertEquals(story, result.getPayload());
    }

    @Test
    void shouldNotAddWithId() throws DataAccessException {
        Story story = getStory();
        story.setId(1);

        Result<Story> result = service.add(story);

        assertEquals(1, result.getErrorMessages().size());
    }

    @Test
    void shouldNotAddInvalid() throws DataAccessException {
        Story story = getStory();
        story.setTitle(null);

        Result<Story> result = service.add(story);

        assertEquals(2, result.getErrorMessages().size());
    }

    @Test
    void shouldUpdate() throws DataAccessException {
        Story story = getStory();
        when(repository.update(story)).thenReturn(true);

        Result<Story> result = service.update(story);

        assertEquals(story, result.getPayload());
    }

    @Test
    void shouldNotUpdateWithNoId() throws DataAccessException {
        Story story = getStory();
        story.setId(0);

        Result<Story> result = service.update(story);

        assertEquals(1, result.getErrorMessages().size());
    }

    @Test
    void shouldNotUpdateNotFound() throws DataAccessException {
        Story story = getStory();
        when(repository.update(story)).thenReturn(false);

        Result<Story> result = service.update(story);

        assertEquals(1, result.getErrorMessages().size());
    }

    @Test
    void shouldDelete() throws DataAccessException {
        when(repository.deleteById(1)).thenReturn(true);

        Result<Story> result = service.deleteById(1);

        assertEquals(true, result.isSuccess());
    }

    @Test
    void shouldNotDeleteNotFound() throws DataAccessException {
        when(repository.deleteById(1000)).thenReturn(false);

        Result<Story> result = service.deleteById(1000);

        assertEquals(1, result.getErrorMessages().size());
    }

    public Author getAuthor() {
        return new Author(1, "Author 1", "Bio 1");
    }

    public Story getStory() {
        return new Story(1, "Title 1", getAuthor(), "descr", "body", "1999-01-01" , Category.OTHER);
    }

}
