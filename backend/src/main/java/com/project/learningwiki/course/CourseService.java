package com.project.learningwiki.course;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseService {
    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<CourseDto> getAllCourses() {
        List<Course> courseList = courseRepository.findAll();
        List<CourseDto> courses = new ArrayList<>();
        for (Course course : courseList) {
            courses.add(new CourseDto(course));
        }
        return courses;
    }

    public CourseDto getCourseByName(String courseName) {
        Course course = courseRepository.findByName(courseName).orElse(null);
        if (course != null) {
            return new CourseDto(course);
        }
        return null;
    }
}
