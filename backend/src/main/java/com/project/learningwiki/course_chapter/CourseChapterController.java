package com.project.learningwiki.course_chapter;

import com.project.learningwiki.utils.ResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/courses/")
@PreAuthorize("isAuthenticated()")
public class CourseChapterController {
    private final CourseChapterService courseChapterService;

    public CourseChapterController(CourseChapterService courseChapterService) {
        this.courseChapterService = courseChapterService;
    }

    @GetMapping("/{courseName}/materiale/{year}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getChaptersByCourseAndYear(@PathVariable(value = "courseName") String courseName, @PathVariable(value = "year") Integer year) {
        var chapters = courseChapterService.getCourseByNameAndYear(courseName, year);

        if (chapters == null) {
            return ResponseEntity.badRequest()
                    .body(new ResponseDto("This course does not exists.", false));
        }
        return ResponseEntity.ok(chapters);
    }
}
