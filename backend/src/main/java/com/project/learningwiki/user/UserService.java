package com.project.learningwiki.user;

import com.project.learningwiki.mentoring.Mentoring;
import com.project.learningwiki.mentoring.MentoringRepository;
import org.keycloak.KeycloakPrincipal;
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final MentoringRepository mentoringRepository;

    public UserService(UserRepository userRepository, MentoringRepository mentoringRepository) {
        this.userRepository = userRepository;
        this.mentoringRepository = mentoringRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public List<User> getAllProfessors() {
        return userRepository.findAll().stream().filter(user -> user.getRole().equals("[ROLE_professor]")).collect(Collectors.toList());
    }

    public User getRequestUser(HttpServletRequest request) {
        KeycloakAuthenticationToken token = (KeycloakAuthenticationToken) request.getUserPrincipal();
        KeycloakPrincipal principal = (KeycloakPrincipal) token.getPrincipal();
        return userRepository.findByName(principal.getKeycloakSecurityContext().getToken().getName());
    }

    public User findUserById(Integer id) {
        return userRepository.findById(id).orElse(null);
    }

    public User getMyMentor(HttpServletRequest request) {
        User currentUser = getRequestUser(request);
        Mentoring mentoring = mentoringRepository.findByStudentId(currentUser.getId());
        if (mentoring != null) {
            return mentoring.getProfessor();
        }

        return null;
    }
}
