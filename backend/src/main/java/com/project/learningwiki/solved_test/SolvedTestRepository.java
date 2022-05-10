package com.project.learningwiki.solved_test;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SolvedTestRepository extends JpaRepository<SolvedTest, Integer> {
    List<SolvedTest> findByUserId(Integer userId);
    SolvedTest findByTestIdAndUserId(Integer testId, Integer UserId);
}
