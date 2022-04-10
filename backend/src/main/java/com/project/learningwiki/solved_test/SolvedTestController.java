package com.project.learningwiki.solved_test;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/solved_tests/")
//@PreAuthorize("isAuthenticated()")
public class SolvedTestController {
    private SolvedTestService solvedTestService;

    public SolvedTestController(SolvedTestService solvedTestService) {
        this.solvedTestService = solvedTestService;
    }
}
