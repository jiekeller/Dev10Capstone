package learn.nlp.data;

import learn.nlp.models.Author;

import java.util.List;

public interface AuthorRepository {
    List<Author> findByNameContains(String name);

    Author findById(int authorId);

    Author add(Author author);

    boolean deleteById(int authorId);
}
