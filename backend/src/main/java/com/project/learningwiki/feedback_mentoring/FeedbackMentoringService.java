package com.project.learningwiki.feedback_mentoring;

import org.springframework.stereotype.Service;

@Service
public class FeedbackMentoringService {
    private FeedbackMentoringRepository feedbackMentoringRepository;

    public FeedbackMentoringService(FeedbackMentoringRepository feedbackMentoringRepository) {
        this.feedbackMentoringRepository = feedbackMentoringRepository;
    }
}
