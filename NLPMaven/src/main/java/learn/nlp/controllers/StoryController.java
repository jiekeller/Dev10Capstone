package learn.nlp.controllers;

import learn.nlp.data.DataAccessException;
import learn.nlp.domain.Result;
import learn.nlp.domain.StoryService;
import learn.nlp.models.Story;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/story")
public class StoryController {
    private final StoryService service;

    public StoryController (StoryService service) {
        this.service = service;
    }

    @GetMapping
    public List<Story> findAll() throws DataAccessException {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Story> findById(@PathVariable int id) throws DataAccessException {
        Story story = service.findById(id);
        if (story == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(story, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> add(@RequestBody Story story) throws DataAccessException {
        Result<Story> result = service.add(story);
        if (!result.isSuccess()) {
            return new ResponseEntity<>(result.getErrorMessages(), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable int id, @RequestBody Story story) throws DataAccessException {
        if (id != story.getId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT); //409
        }

        Result<Story> result = service.update(story);
        if (!result.isSuccess()) {
            if (result.getPayload() == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND); //404
            }
            return new ResponseEntity<>(result.getErrorMessages(), HttpStatus.BAD_REQUEST); //400
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT); //204
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable int id) throws DataAccessException {
        if (service.deleteById(id).isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); //204
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND); //404
    }

}
