package com.project.learningwiki.feedback_mentoring;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbackMentoringRepository extends JpaRepository<FeedbackMentoring, Integer> {
    List<FeedbackMentoring> findByStudentId(Integer userId);
    List<FeedbackMentoring> findBySolvedTestId(Integer solvedTestId);
}
