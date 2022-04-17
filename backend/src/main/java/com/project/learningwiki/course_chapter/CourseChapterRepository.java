package com.project.learningwiki.course_chapter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseChapterRepository extends JpaRepository<CourseChapter, Integer> {
    List<CourseChapter> findByCourseNameAndYear(String courseName, Integer year);
}
