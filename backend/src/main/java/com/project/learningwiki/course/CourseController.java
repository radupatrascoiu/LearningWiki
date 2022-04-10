package com.project.learningwiki.course;

import com.project.learningwiki.utils.ResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/courses/")
//@PreAuthorize("isAuthenticated()")
public class CourseController {
    private CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping()
    public ResponseEntity<?> getCourses(HttpServletRequest httpServletRequest) {
        var courses = courseService.getAllCourses();
        if (courses != null) {
            System.out.println(courses);
            return ResponseEntity.ok(courses);
        }

        return ResponseEntity.badRequest().body(new ResponseDto("Bad request", List.of()));
    }
}
