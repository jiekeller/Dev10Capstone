package learn.nlp.domain;

import learn.nlp.data.DataAccessException;
import learn.nlp.data.StoryRepository;
import learn.nlp.models.Story;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoryService {
    private final StoryRepository repository;

    public StoryService(StoryRepository repository) {
        this.repository = repository;
    }

    public Story findById(int storyId) throws DataAccessException {
        return repository.findById(storyId);
    }

    public List<Story> findAll() throws DataAccessException {
        return repository.findAll();
    }

    public Result<Story> add(Story story) throws DataAccessException {
        Result<Story> result = validate(story);

        if (story.getId() != 0) {
            result.addErrorMessage("Story ID cannot be set for `add` operation.");
        }

        if (!result.isSuccess()) {
            return result;
        }

        story = repository.add(story);
        result.setPayload(story);
        return result;
    }

    public Result<Story> update(Story story) throws DataAccessException {
        Result<Story> result = validate(story);

        if (story.getId() <= 0) {
            result.addErrorMessage("Story ID must be set for `update` operation.");
        }

        if (!result.isSuccess()) {
            return result;
        }

        if (!repository.update(story)) {
            String message = String.format("Story ID: %s, not found.", story.getId());
            result.addErrorMessage(message);
        }

        result.setPayload(story);

        return result;
    }

    public Result<Story> deleteById(int storyId) throws DataAccessException {
        Result<Story> result = new Result<>();

        if (!repository.deleteById(storyId)) {
            String message = String.format("Story ID: %s, not found.", storyId);
            result.addErrorMessage(message);
        }

        return result;
    }

    private Result<Story> validate(Story story) {
        Result<Story> result = new Result<>();

        if (story == null) {
            result.addErrorMessage("Story cannot be null.");
            return result;
        }

        if (story.getTitle() == null || story.getTitle().isBlank()) {
            result.addErrorMessage("Title is required.");
        }

        if (story.getAuthor() == null) {
            result.addErrorMessage("Author is required.");
        }

        if (story.getCategory() == null) {
            result.addErrorMessage("Story Category is required.");
        }

        return result;
    }



}
