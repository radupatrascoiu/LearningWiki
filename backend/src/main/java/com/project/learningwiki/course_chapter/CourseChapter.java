package com.project.learningwiki.course_chapter;

import com.project.learningwiki.chapter.Chapter;
import com.project.learningwiki.course.Course;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "course_chapter")
public class CourseChapter {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "COURSE_ID", referencedColumnName = "ID")
    private Course course;

    @OneToOne
    @JoinColumn(name = "CHAPTER_ID", referencedColumnName = "ID")
    private Chapter chapter;

    private Integer year;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        CourseChapter that = (CourseChapter) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
