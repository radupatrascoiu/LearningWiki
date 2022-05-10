package com.project.learningwiki.feedback_mentoring;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackMentoringService {
    private final FeedbackMentoringRepository feedbackMentoringRepository;

    public FeedbackMentoringService(FeedbackMentoringRepository feedbackMentoringRepository) {
        this.feedbackMentoringRepository = feedbackMentoringRepository;
    }

    public void addFeedback(FeedbackMentoring feedbackMentoring) {
        feedbackMentoringRepository.save(feedbackMentoring);
    }

    public List<FeedbackMentoring> getFeedbacksByUserId(Integer userId) {
        return feedbackMentoringRepository.findByStudentId(userId);
    }

    public List<FeedbackMentoring> getFeedbacksBySolvedTestId(Integer solvedTestId) {
        return feedbackMentoringRepository.findBySolvedTestId(solvedTestId);
    }
}
