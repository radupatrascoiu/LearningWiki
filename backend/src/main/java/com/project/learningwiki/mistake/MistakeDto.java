package com.project.learningwiki.mistake;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class MistakeDto {
    private Integer id;
    private String courseName;
    private String classCourse;
    private String chapter;
    private String details;

    public MistakeDto(Mistake mistake) {
        this.id = mistake.getId();
        this.courseName = mistake.getCourseName();
        this.classCourse = mistake.getClassCourse();
        this.chapter = mistake.getChapter();
        this.details = mistake.getDetails();
    }

    public MistakeDto() {
    }
}
