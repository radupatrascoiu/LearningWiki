package com.project.learningwiki.course_chapter;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/course_chapter/")
//@PreAuthorize("isAuthenticated()")
public class CourseChapterController {
    private CourseChapterService courseChapterService;

    public CourseChapterController(CourseChapterService courseChapterService) {
        this.courseChapterService = courseChapterService;
    }
}
