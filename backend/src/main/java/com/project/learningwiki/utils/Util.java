package com.project.learningwiki.utils;

import com.project.learningwiki.chapter.ChapterRepository;
import com.project.learningwiki.course.Course;
import com.project.learningwiki.course.CourseRepository;
import com.project.learningwiki.course_chapter.CourseChapterRepository;
import com.project.learningwiki.progress.Progress;
import com.project.learningwiki.progress.ProgressRepository;
import com.project.learningwiki.user.User;
import com.project.learningwiki.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Util {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private ChapterRepository chapterRepository;
    @Autowired
    private ProgressRepository progressRepository;
    @Autowired
    private CourseChapterRepository courseChapterRepository;

    public void insertFakeDataInDB() {

        // Clear the db
        courseRepository.deleteAll();
        progressRepository.deleteAll();


        Course matematica = courseRepository.save(new Course("matematica", "Materiale utile pentru clasele 9-12", "Matematica primara, clasele 5-8", "../img/matematica-logo.jpg"));
        Course informatica = courseRepository.save(new Course("informatica", "Materiale utile pentru clasele 9-12", "Operatii simple de matematica, logica", "../img/informatica-logo.jpg"));

        courseRepository.save(matematica);
        courseRepository.save(informatica);

        User user = userRepository.findByEmail("patrascoiu.ion.radu@gmail.com");

        if (user != null) {
            Progress progress = progressRepository.save(new Progress(user, matematica, "un progres f bun"));
            progressRepository.save(progress);
        }
    }
}
