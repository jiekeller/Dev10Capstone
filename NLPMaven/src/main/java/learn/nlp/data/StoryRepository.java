package learn.nlp.data;

import learn.nlp.models.Story;

import java.util.List;

public interface StoryRepository {
    List<Story> findAll() throws DataAccessException;
    Story findById(int id) throws DataAccessException;
    Story add(Story story) throws DataAccessException;
    boolean update(Story story) throws DataAccessException;
    boolean deleteById(int id) throws DataAccessException;
}
