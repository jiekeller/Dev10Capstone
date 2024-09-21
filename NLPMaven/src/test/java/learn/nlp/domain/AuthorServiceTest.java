package learn.nlp.domain;

import learn.nlp.data.AuthorRepository;
import learn.nlp.models.Author;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
public class AuthorServiceTest {

    @Autowired
    AuthorService service;

    @MockBean
    AuthorRepository repository;

    @Test
    void shouldFindByNameContains() {
        when(repository.findByNameContains("king")).thenReturn(List.of(getAuthor()));

        List<Author> authors = service.findByNameContains("king");

        assertEquals(1, authors.size());
    }

    @Test
    void shouldFindById() {
        Author expected = getAuthor();
        when(repository.findById(1)).thenReturn(expected);

        Author actual = service.findById(1);

        assertEquals(expected, actual);
    }

    @Test
    void shouldNotFindById() {
        when(repository.findById(1000)).thenReturn(null);

        Author actual = service.findById(1000);

        assertEquals(null, actual);
    }

    @Test
    void shouldAdd() {
        Author author = getAuthor();
        author.setId(0);
        when(repository.add(author)).thenReturn(author);

        Author actual = service.add(author).getPayload();

        assertEquals(author, actual);
    }

    @Test
    void shouldNotAddWithId() {
        Author author = getAuthor();
        author.setId(1);

        Author actual = service.add(author).getPayload();

        assertEquals(null, actual);
    }

    @Test
    void shouldNotAddInvalid() {
        Author author = new Author(0, null, null);

        Author actual = service.add(author).getPayload();

        assertEquals(null, actual);
    }

    @Test
    void shouldDeleteById() {
        when(repository.deleteById(1)).thenReturn(true);

        Author actual = service.deleteById(1).getPayload();

        assertEquals(null, actual);
    }



    public Author getAuthor() {
        return new Author(1, "Author 1", "Bio 1");
    }
}
