package com.project.learningwiki.course;

import com.project.learningwiki.utils.ResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/courses/")
@PreAuthorize("isAuthenticated()")
public class CourseController {
    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping()
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getCourses(HttpServletRequest httpServletRequest) {
        var courses = courseService.getAllCourses();
        if (courses != null) {
            System.out.println(courses);
            return ResponseEntity.ok(courses);
        }

        return ResponseEntity.badRequest().body(new ResponseDto("Bad request", List.of()));
    }

    @GetMapping("/{courseId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getCourse(@PathVariable(value = "courseId") String courseName) {
        var course = courseService.getCourseByName(courseName);
        if (course == null) {
            return ResponseEntity.badRequest()
                    .body(new ResponseDto("This course does not exists.", false));
        }
        return ResponseEntity.ok(course);
    }
}
