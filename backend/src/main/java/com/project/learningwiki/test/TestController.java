package com.project.learningwiki.test;

import com.project.learningwiki.utils.ResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/tests")
@PreAuthorize("isAuthenticated()")
public class TestController {
    private final TestService testService;

    public TestController(TestService testService) {
        this.testService = testService;
    }

    @GetMapping("/{courseName}/{year}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getTestsByCourseAndYear(@PathVariable(value = "courseName") String courseName, @PathVariable(value = "year") Integer year) {
        var tests = testService.getTestsByNameAndYear(courseName, year);

        if (tests == null) {
            return ResponseEntity.badRequest()
                    .body(new ResponseDto("This course or year does not exists.", false));
        }
        return ResponseEntity.ok(tests);
    }

    @GetMapping()
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getAllTests() {
        var tests = testService.getAllTests();

        if (tests == null) {
            return ResponseEntity.badRequest()
                    .body(new ResponseDto("There are no tests", false));
        }
        return ResponseEntity.ok(tests);
    }

    @GetMapping("/by_course/{courseName}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getAllTestsByCourseName(@PathVariable String courseName) {
        var tests = testService.getAllTestsByCourseName(courseName);

        if (tests == null) {
            return ResponseEntity.badRequest()
                    .body(new ResponseDto("There are no tests", false));
        }
        return ResponseEntity.ok(tests);
    }

    @GetMapping("/{testId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getTestById(@PathVariable Integer testId) {
        var test = testService.getTestsById(testId);

        if (test == null) {
            return ResponseEntity.badRequest()
                    .body(new ResponseDto("This course does not exists.", false));
        }
        return ResponseEntity.ok(test);
    }
}
