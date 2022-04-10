package com.project.learningwiki.feedback_mentoring;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/feedback_mentoring/")
//@PreAuthorize("isAuthenticated()")
public class FeedbackMentoringController {
    private FeedbackMentoringService feedbackMentoringService;

    public FeedbackMentoringController(FeedbackMentoringService feedbackMentoringService) {
        this.feedbackMentoringService = feedbackMentoringService;
    }
}
