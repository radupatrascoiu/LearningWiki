package com.project.learningwiki.course;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CourseDto {
    private int courseId;
    private String name;
//    private Progress progress;
    private String infos;
    private String requirements;
    private String photo;

    public CourseDto(Course course) {
        this.courseId = course.getId();
        this.name = course.getName();
//        this.progress = course.getProgress();
        this.infos = course.getInfos();
        this.requirements = course.getRequirements();
        this.photo = course.getPhoto();
    }
}
