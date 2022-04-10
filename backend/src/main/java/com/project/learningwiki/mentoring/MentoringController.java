package com.project.learningwiki.mentoring;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/mentoring/")
//@PreAuthorize("isAuthenticated()")
public class MentoringController {
    private MentoringService mentoringService;

    public MentoringController(MentoringService mentoringService) {
        this.mentoringService = mentoringService;
    }
}
