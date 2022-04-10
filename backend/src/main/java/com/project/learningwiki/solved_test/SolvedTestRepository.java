package com.project.learningwiki.solved_test;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SolvedTestRepository extends JpaRepository<SolvedTest, Integer> {
}
