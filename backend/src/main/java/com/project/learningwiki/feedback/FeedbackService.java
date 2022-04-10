package com.project.learningwiki.feedback;

import org.springframework.stereotype.Service;

@Service
public class FeedbackService {
    private FeedbackRepository feedbackRepository;

    public FeedbackService(FeedbackRepository feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }
}
