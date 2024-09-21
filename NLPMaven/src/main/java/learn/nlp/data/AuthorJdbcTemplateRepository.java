package learn.nlp.data;

import learn.nlp.models.Author;
import learn.nlp.data.mapper.AuthorMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class AuthorJdbcTemplateRepository implements AuthorRepository {


    private final JdbcTemplate jdbcTemplate;

    public AuthorJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Author> findByNameContains(String name) {

        final String sql = """
                select
                    author_id,
                    `name`,
                    `description`
                from author
                where `name` like ?
                order by `name`
                limit 25;""";

        return jdbcTemplate.query(sql, new AuthorMapper(), "%" + name + "%");
    }

    @Override
    public Author findById(int authorId) {

        final String sql = """
                select
                    author_id,
                    `name`,
                    `description`
                from author
                where author_id = ?;""";

        return jdbcTemplate.query(sql, new AuthorMapper(), authorId)
                .stream().findFirst().orElse(null);
    }

    @Override
    public Author add(Author author) {

        if (author == null) {
            return null;
        }

        KeyHolder keyHolder = new GeneratedKeyHolder();

        final String sql = """
                insert into author (`name`, `description`)
                values (?, ?);""";

        int rowsAffected = jdbcTemplate.update(connection -> {
            var ps = connection.prepareStatement(sql, new String[] { "author_id" });
            ps.setString(1, author.getName());
            ps.setString(2, author.getDescription());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        author.setId(keyHolder.getKey().intValue());

        return author;
    }

    @Override
    public boolean deleteById(int authorId) {

        final String sql = """
                delete from author
                where author_id = ?;""";
        return jdbcTemplate.update(sql, authorId) > 0;
    }
}
