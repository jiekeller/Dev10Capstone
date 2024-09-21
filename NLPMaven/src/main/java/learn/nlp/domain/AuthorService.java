package learn.nlp.domain;

import learn.nlp.data.AuthorRepository;
import learn.nlp.models.Author;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorService {
    private final AuthorRepository repository;

    public AuthorService(AuthorRepository repository) {
        this.repository = repository;
    }

    public List<Author> findByNameContains(String name) {
        return repository.findByNameContains(name);
    }

    public Author findById(int authorId) {
        return repository.findById(authorId);
    }

    public Result<Author> add(Author author) {
        Result<Author> result = validate(author);

        if (author.getId() != 0) {
            result.addErrorMessage("Author ID cannot be set for `add` operation.");
        }

        if (!result.isSuccess()) {
            return result;
        }

        author = repository.add(author);
        result.setPayload(author);
        return result;
    }

    public Result<Author> deleteById(int authorId) {
        Result<Author> result = new Result<>();

        if (!repository.deleteById(authorId)) {
            result.addErrorMessage("Author ID: " + authorId + " not found.");
        }

        return result;
    }

    private Result<Author> validate(Author author) {
        Result<Author> result = new Result<>();

        if (author == null) {
            result.addErrorMessage("Author cannot be null.");
            return result;
        }

        if (author.getName() == null || author.getName().isBlank()) {
            result.addErrorMessage("Author last name is required.");
        }


        return result;
    }
}
