package learn.nlp.data;

import learn.nlp.models.AppUser;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.core.GrantedAuthority;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
public class AppUserJdbcTemplateRepositoryTest {

    @Autowired
    private AppUserJdbcTemplateRepository repository;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    static boolean hasSetup = false;

    @BeforeEach
    void setup() {
        if (!hasSetup) {
            hasSetup = true;
            jdbcTemplate.update("call set_known_good_state();");
        }
    }

    @Test
    void shouldFindByUsername() {
        AppUser user = repository.findByUsername("john@smith.com");
        assertNotNull(user);
        assertEquals(1, user.getAppUserId());
    }

    @Test
    void shouldNotFindByUsername() {
        AppUser user = repository.findByUsername("blank");
        assertNull(user);
    }

    @Test
    void shouldCreate() {
        AppUser user = new AppUser(3, "admin", "password", true, new ArrayList<>());
        user = repository.create(user);
        assertNotNull(user);
    }

    @Test
    void shouldUpdate() {
        AppUser user = repository.findByUsername("john@smith.com");
        user.setEnabled(false);
        assertTrue(repository.update(user));
    }

    @Test
    void shouldNotUpdate() {
        AppUser user = new AppUser(1000, "admin", "password", true, new ArrayList<>());
        assertFalse(repository.update(user));
    }


}
