package com.project.learningwiki.user;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api")
@PreAuthorize("isAuthenticated()")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    @PreAuthorize("isAuthenticated()")
    public String getAllUsers(HttpServletRequest httpServletRequest) {
        return userService.getAllUsers().toString();
    }

    @GetMapping("/users/professors")
    @PreAuthorize("isAuthenticated()")
    public List<UserDto> getAllProfessors(HttpServletRequest httpServletRequest) {
        return userService.getAllProfessors().stream().map(UserDto::new).collect(Collectors.toList());
    }

    @GetMapping("/myMentor")
    @PreAuthorize("isAuthenticated()")
    public UserDto getMyMentor(HttpServletRequest httpServletRequest) {
        User myMentor = userService.getMyMentor(httpServletRequest);
        if (myMentor != null) {
            return new UserDto(myMentor);
        }

        return null;
    }
}
