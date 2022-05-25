package com.project.learningwiki.solved_test;

import com.project.learningwiki.user.RankingDto;
import com.project.learningwiki.user.User;
import com.project.learningwiki.user.UserService;
import com.project.learningwiki.utils.ResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/solved_tests")
@PreAuthorize("isAuthenticated()")
public class SolvedTestController {
    private final SolvedTestService solvedTestService;
    private final UserService userService;

    public SolvedTestController(SolvedTestService solvedTestService, UserService userService) {
        this.solvedTestService = solvedTestService;
        this.userService = userService;
    }

    @PostMapping("/add")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> addSolvedTest(@RequestBody SolvedTestDto solvedTestDto,
                                        HttpServletRequest request) {
        if (solvedTestDto != null) {
            solvedTestService.addSolvedTest(solvedTestDto);
            return ResponseEntity.ok(new ResponseDto("Success", true));
        }

        return ResponseEntity.badRequest().body(new ResponseDto("Bad request", false));
    }

    @GetMapping("/by_userEmail/")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getSolvedTestsByUserEmail(HttpServletRequest request) {
        var currentUser = userService.getRequestUser(request);
        List<SolvedTest> solvedTests = null;
        if (currentUser != null) {
            solvedTests = solvedTestService.getSolvedTestsByUser(currentUser);
        }

        if (solvedTests == null) {
            return ResponseEntity.badRequest()
                    .body(new ResponseDto("This user doesn't have solved tests.", false));
        }
        return ResponseEntity.ok(solvedTests);
    }

    @GetMapping("/last_solved_tests")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getLastSolvedTestsByUser(HttpServletRequest request) {
        var currentUser = userService.getRequestUser(request);
        List<SolvedTest> lastSolvedTests = null;
        if (currentUser != null) {
            lastSolvedTests = solvedTestService.getLastSolvedTestsByUser(currentUser);
        }

        if (lastSolvedTests == null) {
            return ResponseEntity.badRequest()
                    .body(new ResponseDto("This user doesn't have solved tests.", false));
        }
        return ResponseEntity.ok(lastSolvedTests);
    }

    @GetMapping("/attempted_tests/by_userEmail/")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getAttemptedTestsByUserEmail(HttpServletRequest request) {
        var currentUser = userService.getRequestUser(request);
        List<SolvedTest> attemptedTests = null;
        if (currentUser != null) {
            attemptedTests = solvedTestService.getAllTestsByUser(currentUser);
        }

        if (attemptedTests == null) {
            return ResponseEntity.badRequest()
                    .body(new ResponseDto("This user doesn't have solved tests.", false));
        }
        return ResponseEntity.ok(attemptedTests);
    }

    @GetMapping("/by_course/{userEmail}/{courseName}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getSolvedTestsByUserEmailAndCourseName(@PathVariable(value = "userEmail") String userEmail, @PathVariable(value = "courseName") String courseName) {
        List<SolvedTest> solvedTests = solvedTestService.getTestsByUserEmailAndCourseName(userEmail, courseName);
        if (solvedTests == null || solvedTests.isEmpty()) {
            return ResponseEntity.badRequest()
                    .body(new ResponseDto("This user doesn't have solved tests.", false));
        }
        return ResponseEntity.ok(solvedTests);
    }

    @GetMapping("/{testId}/{userEmail}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getSolvedTestByTestIdAndUserEmail(@PathVariable(value = "testId") Integer testId, @PathVariable(value = "userEmail") String userEmail) {
        User user = userService.findUserByEmail(userEmail);
        SolvedTest solvedTest = null;
        if (user != null) {
            solvedTest = solvedTestService.getSolvedTestByTestIdAndUserId(testId, user.getId());
        }

        if (solvedTest == null) {
            return ResponseEntity.badRequest()
                    .body(new ResponseDto("This user doesn't have solved tests.", false));
        }
        return ResponseEntity.ok(solvedTest);
    }

    @GetMapping("/{solvedTestId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getSolvedTestById(@PathVariable(value = "solvedTestId") Integer solvedTestId) {
        SolvedTest solvedTest = solvedTestService.getSolvedTestById(solvedTestId);

        if (solvedTest == null) {
            return ResponseEntity.badRequest()
                    .body(new ResponseDto("This user doesn't have solved tests.", false));
        }
        return ResponseEntity.ok(solvedTest);
    }

    @GetMapping("/ranking_by_progress")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getAllUsersProgress() {
        List<RankingDto> rankings = solvedTestService.generateRanking();
        if (rankings != null) {
            return ResponseEntity.ok(rankings);
        }

        return ResponseEntity.badRequest()
                .body(new ResponseDto("There are no rankings for users.", false));
    }

    @GetMapping("/in_the_last_period")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getTestsInTheLastPeriodByClass(HttpServletRequest request) {
        var currentUser = userService.getRequestUser(request);
        if (currentUser != null) {
            List<SolvedTestsInTheLastPeriodDto> testsInTheLastPeriodByClass = solvedTestService.getTestsInTheLastPeriodByClass(currentUser);
            if (testsInTheLastPeriodByClass != null) {
                return ResponseEntity.ok(testsInTheLastPeriodByClass);
            }
        }

        return ResponseEntity.badRequest()
                .body(new ResponseDto("There are no solved tests for the current user in the last period.", false));
    }
}
