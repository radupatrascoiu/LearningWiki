package com.project.learningwiki.test;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestRepository extends JpaRepository<Test, Integer> {
    List<Test> findByCourseNameAndYear(String courseName, Integer year);
    List<Test> findByCourseName(String courseName);
}
