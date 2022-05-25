package com.project.learningwiki.user;

import com.project.learningwiki.solved_test.SolvedTest;
import com.project.learningwiki.solved_test.SolvedTestService;
import com.project.learningwiki.test.Test;
import com.project.learningwiki.test.TestService;
import com.project.learningwiki.utils.ResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api")
@PreAuthorize("isAuthenticated()")
public class UserController {
    private final UserService userService;
    private final SolvedTestService solvedTestService;
    private final TestService testService;

    public UserController(UserService userService, SolvedTestService solvedTestService, TestService testService) {
        this.userService = userService;
        this.solvedTestService = solvedTestService;
        this.testService = testService;
    }

    @GetMapping("/users")
    @PreAuthorize("isAuthenticated()")
    public String getAllUsers() {
        return userService.getAllUsers().toString();
    }

    @GetMapping("/users/professors")
    @PreAuthorize("isAuthenticated()")
    public List<UserDto> getAllProfessors() {
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

    @GetMapping("/progress")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getProgressByUser(HttpServletRequest request) {
        var currentUser = userService.getRequestUser(request);
        List<SolvedTest> solvedTests = null;
        List<Test> allTests = null;
        int progress = 0;

        if (currentUser != null) {
            solvedTests = solvedTestService.getSolvedTestsByUser(currentUser);
            allTests = testService.getAllTests();
            if (solvedTests != null && allTests != null && allTests.size() != 0) {
                progress = solvedTests.size() * 100 / allTests.size();
            }
        }

        if (solvedTests == null || allTests == null) {
            return ResponseEntity.badRequest()
                    .body(new ResponseDto("This user doesn't have solved tests.", false));
        }

        return ResponseEntity.ok(progress);
    }
}
