package com.project.learningwiki.test;

import com.project.learningwiki.chapter.Chapter;
import com.project.learningwiki.question.Question;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tests")
public class Test {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private Integer year;

    private String courseName;

    @ManyToMany
    private List<Chapter> chapters;

    @ManyToMany(cascade = CascadeType.MERGE)
    private List<Question> questions;

    public Test(String name, Integer year, String courseName, List<Chapter> chapters, List<Question> questions) {
        this.name = name;
        this.year = year;
        this.courseName = courseName;
        this.chapters = chapters;
        this.questions = questions;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Test test = (Test) o;
        return id != null && Objects.equals(id, test.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
