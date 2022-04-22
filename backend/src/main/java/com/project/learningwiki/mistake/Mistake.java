package com.project.learningwiki.mistake;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Objects;

@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = "mistakes")
public class Mistake {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String courseName;
    private String classCourse;
    private String chapter;
    private String details;

    public Mistake(String courseName, String classCourse, String chapter, String details) {
        this.courseName = courseName;
        this.classCourse = classCourse;
        this.chapter = chapter;
        this.details = details;
    }

    public Mistake(Integer id, String courseName, String classCourse, String chapter, String details) {
        this.id = id;
        this.courseName = courseName;
        this.classCourse = classCourse;
        this.chapter = chapter;
        this.details = details;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Mistake mistake = (Mistake) o;
        return Objects.equals(id, mistake.id) && Objects.equals(courseName, mistake.courseName) && Objects.equals(classCourse, mistake.classCourse) && Objects.equals(chapter, mistake.chapter) && Objects.equals(details, mistake.details);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, courseName, classCourse, chapter, details);
    }

    @Override
    public String toString() {
        return "Mistake{" +
                "id=" + id +
                ", courseName='" + courseName + '\'' +
                ", classCourse='" + classCourse + '\'' +
                ", chapter='" + chapter + '\'' +
                ", details='" + details + '\'' +
                '}';
    }
}
