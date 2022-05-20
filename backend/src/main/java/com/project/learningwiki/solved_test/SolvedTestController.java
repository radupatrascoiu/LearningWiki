package com.project.learningwiki.solved_test;

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

    @GetMapping("/by_course/{userEmail}/{courseName}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getSolvedTestsByUserEmail(@PathVariable(value = "userEmail") String userEmail, @PathVariable(value = "courseName") String courseName) {
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
}
