package com.project.learningwiki.course_chapter;

import com.project.learningwiki.chapter.Chapter;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseChapterService {
    private CourseChapterRepository courseChapterRepository;

    public CourseChapterService(CourseChapterRepository courseChapterRepository) {
        this.courseChapterRepository = courseChapterRepository;
    }

    public List<Chapter> getCourseByNameAndYear(String courseName, Integer year) {
        List<CourseChapter> courseChapterList = courseChapterRepository.findByCourseNameAndYear(courseName, year);

        List<Chapter> chapters = courseChapterList.stream().map(CourseChapter::getChapter).collect(Collectors.toList());

        System.out.println("\n\n\n--------------------------------------------------------------------\n\n\n");
        System.out.println(courseChapterList);
        System.out.println("\n\n\n--------------------------------------------------------------------\n\n\n");

        return chapters;
    }
}
