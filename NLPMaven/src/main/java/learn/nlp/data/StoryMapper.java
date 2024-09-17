package learn.nlp.data;

import learn.nlp.models.Author;
import learn.nlp.models.Category;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import learn.nlp.models.Story;

public class StoryMapper implements RowMapper<Story> {

    @Override
    public Story mapRow(ResultSet rs, int rowNum) throws SQLException {
        Author author = new Author();
        author.setId(rs.getInt("author_id"));
        author.setName(rs.getString("name"));
        author.setDescription(rs.getString("description"));


        Story story = new Story();
        story.setId(rs.getInt("story_id"));
        story.setTitle(rs.getString("title"));
        story.setAuthor(author);
        story.setPublishedDate(rs.getString("publishedDate"));
        story.setText(rs.getString("text"));
        story.setDescription(rs.getString("story_description"));
        story.setCategory(Category.valueOf(rs.getString("category")));
        return story;
    }

}
