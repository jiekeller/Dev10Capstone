package learn.nlp.data;

import learn.nlp.models.Story;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class StoryJdbcTemplateRepository implements StoryRepository{
    private final JdbcTemplate jdbcTemplate;

    public StoryJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Story> findAll() throws DataAccessException {

        final String sql = "select story_id, title, author_id, publishedDate, text, description, category " +
                "from story " +
                "order by title;";

        return null;
    }

    @Override
    public Story findById(int id) throws DataAccessException {
        return null;
    }

    @Override
    public Story add(Story story) throws DataAccessException {
        return null;
    }

    @Override
    public boolean update(Story story) throws DataAccessException {
        return false;
    }

    @Override
    public boolean deleteById(int id) throws DataAccessException {
        return false;
    }
}
