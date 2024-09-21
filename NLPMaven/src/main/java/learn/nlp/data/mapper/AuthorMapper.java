package learn.nlp.data.mapper;

import learn.nlp.models.Author;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AuthorMapper implements RowMapper<Author> {
    @Override
    public Author mapRow(ResultSet resultSet, int i) throws SQLException {
        Author author = new Author();
        author.setId(resultSet.getInt("author_id"));
        author.setName(resultSet.getString("name"));
        author.setDescription(resultSet.getString("description"));
        return author;
    }
}
