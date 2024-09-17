package learn.nlp.data;

import learn.nlp.models.Story;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class StoryJdbcTemplateRepository implements StoryRepository{
    private final JdbcTemplate jdbcTemplate;

    public StoryJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Story> findAll() throws DataAccessException {

        final String sql = """
                select
                s.story_id story_id,
                    s.title title,
                    s.publishedDate publishedDate,
                    s.`text` 'text',
                    s.`description` story_description,
                    a.`name` 'name',
                    a.author_id author_id,
                    a.`description`,
                    c.`type` category
                 from story s
                 inner join author a on a.author_id = s.author_id
                 inner join category c on c.cat_id = s.cat_id
                 order by s.title;""";

        return jdbcTemplate.query(sql, new StoryMapper());
    }

    @Override
    public Story findById(int id) throws DataAccessException {

        final String sql = """
                select
                s.story_id story_id,
                    s.title title,
                    s.publishedDate publishedDate,
                    s.`text` 'text',
                    s.`description` story_description,
                    a.`name` 'name',
                    a.author_id author_id,
                    a.`description`,
                    c.`type` category
                 from story s
                 inner join author a on a.author_id = s.author_id
                 inner join category c on c.cat_id = s.cat_id
                 where s.story_id = ?;""";

        return jdbcTemplate.query(sql, new StoryMapper(), id).stream().findFirst().orElse(null);
    }

    @Override
    public Story add(Story story) throws DataAccessException {

        if (story == null) {
            return null;
        }

        final String sql = """
                insert into story (title, publishedDate, `text`, `description`, author_id, cat_id)
                values (?, ?, ?, ?, ?, ?);""";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, story.getTitle());
            ps.setDate(2, story.getPublishedDate() == null ? null : Date.valueOf(story.getPublishedDate()));
            ps.setString(3, story.getText());
            ps.setString(4, story.getDescription());
            ps.setInt(5, story.getAuthor().getId());
            ps.setInt(6, story.getCategory().getCat_id());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        story.setId(keyHolder.getKey().intValue());

        return story;
    }

    @Override
    public boolean update(Story story) throws DataAccessException {

        final String sql = """
                update story set
                title = ?,
                publishedDate = ?,
                `text` = ?,
                `description` = ?,
                author_id = ?,
                cat_id = ?
                where story_id = ?;""";

        return jdbcTemplate.update(sql,
                story.getTitle(),
                story.getPublishedDate() == null ? null : Date.valueOf(story.getPublishedDate()),
                story.getText(),
                story.getDescription(),
                story.getAuthor().getId(),
                story.getCategory().getCat_id(),
                story.getId()) > 0;
    }

    @Override
    public boolean deleteById(int id) throws DataAccessException {

        final String sql = "delete from story where story_id = ?;";

        return jdbcTemplate.update(sql, id) > 0;
    }
}
