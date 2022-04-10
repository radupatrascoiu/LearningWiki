package com.project.learningwiki.progress;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/progress")
//@PreAuthorize("isAuthenticated()")
public class ProgressController {
    private ProgressService progressService;

    public ProgressController(ProgressService progressService) {
        this.progressService = progressService;
    }
}
