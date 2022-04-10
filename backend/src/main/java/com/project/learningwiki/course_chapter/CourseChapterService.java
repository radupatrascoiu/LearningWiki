package com.project.learningwiki.course_chapter;

import org.springframework.stereotype.Service;

@Service
public class CourseChapterService {
    private CourseChapterRepository chapterRepository;

    public CourseChapterService(CourseChapterRepository chapterRepository) {
        this.chapterRepository = chapterRepository;
    }
}
