package com.project.learningwiki.test;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/tests/")
//@PreAuthorize("isAuthenticated()")
public class TestController {
    private TestService testService;

    public TestController(TestService testService) {
        this.testService = testService;
    }
}
