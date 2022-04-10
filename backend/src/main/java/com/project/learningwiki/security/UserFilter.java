package com.project.learningwiki.security;

import com.project.learningwiki.user.User;
import com.project.learningwiki.user.UserRepository;
import org.keycloak.KeycloakPrincipal;
import org.keycloak.KeycloakSecurityContext;
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.keycloak.representations.AccessToken;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

@Component
public class UserFilter implements Filter {
    private final UserRepository userRepository;

    public UserFilter(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse,
                         FilterChain filterChain) throws IOException, ServletException {

        var request = (HttpServletRequest) servletRequest;
        var response = (HttpServletResponse) servletResponse;
        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) request.getUserPrincipal();
        System.out.println(token);
        KeycloakPrincipal principal = (KeycloakPrincipal) token.getPrincipal();
        if (principal != null) {
            KeycloakSecurityContext session = principal.getKeycloakSecurityContext();
            AccessToken accessToken = session.getToken();
            var emailId = accessToken.getEmail();
            var name = accessToken.getName();
            if(userRepository.findByEmail(emailId) == null) {
                User user = new User();

                user.setRole(token.getAuthorities().toString());
                user.setEmail(emailId);
                user.setName(name);
                user.setSolvedTestList(new ArrayList<>());
                userRepository.save(user);
            }
        }
        filterChain.doFilter(request, response);
    }
}