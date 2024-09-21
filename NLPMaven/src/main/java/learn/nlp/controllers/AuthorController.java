package learn.nlp.controllers;


import learn.nlp.domain.AuthorService;
import learn.nlp.domain.Result;
import learn.nlp.models.Author;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/author")
public class AuthorController {
    private final AuthorService service;

    public AuthorController(AuthorService service) {
        this.service = service;
    }

    @GetMapping
    public List<Author> findByNameContains(@RequestParam String name) {
        return service.findByNameContains(name);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Author> findById(@PathVariable int id) {
        Author author = service.findById(id);
        if (author == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(author, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> add(@RequestBody Author author) {
        Result<Author> result = service.add(author);
        if (!result.isSuccess()) {
            return new ResponseEntity<>(result.getErrorMessages(), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable int id) {
        Result<Author> result = service.deleteById(id);
        if (!result.isSuccess()) {
            return new ResponseEntity<>(result.getErrorMessages(), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
