package com.project.learningwiki.feedback_mentoring;

import com.project.learningwiki.feedback.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackMentoringRepository extends JpaRepository<Feedback, Integer> {
}
