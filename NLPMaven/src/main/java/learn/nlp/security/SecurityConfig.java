package learn.nlp.security;

import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;

@Configuration
@ConditionalOnWebApplication
public class SecurityConfig {

    private final JwtConverter converter;

    public SecurityConfig(JwtConverter converter) {
        this.converter = converter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, AuthenticationConfiguration config) throws Exception {
        // we're not using HTML forms in our app
        //so disable CSRF (Cross Site Request Forgery)
        http.csrf(AbstractHttpConfigurer::disable);

        // this configures Spring Security to allow
        //CORS related requests (such as preflight checks)
        http.cors(Customizer.withDefaults());

        http.authorizeHttpRequests(authorize -> authorize
                // new...
                .requestMatchers("/authenticate").permitAll()
                .requestMatchers("/refresh_token").authenticated()
                .requestMatchers("/create_account").permitAll()
                .requestMatchers(HttpMethod.GET,
                        "/api/nlp", "/api/nlp/*").permitAll()
                .requestMatchers(HttpMethod.GET,
                        "/api/story").permitAll()
                .requestMatchers(HttpMethod.GET,
                        "/api/story", "/api/story/*").permitAll()
                .requestMatchers(HttpMethod.POST,
                        "/api/story").hasAnyAuthority("USER", "ADMIN")
                .requestMatchers(HttpMethod.PUT,
                        "/api/story/*").hasAnyAuthority("USER", "ADMIN")
                .requestMatchers(HttpMethod.DELETE,
                        "/api/story/*").hasAnyAuthority("ADMIN")
                // if we get to this point, let's deny all requests
                .requestMatchers("/**").denyAll()
        );
        http.addFilter(new JwtRequestFilter(manager(config), converter));

        http.sessionManagement(configurer -> configurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        return http.build();
    }

    @Bean
    public AuthenticationManager manager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
