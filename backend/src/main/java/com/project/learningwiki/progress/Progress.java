package com.project.learningwiki.progress;

import com.project.learningwiki.course.Course;
import com.project.learningwiki.user.User;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "progress")
public class Progress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne(optional = false)
    @JoinColumn(name = "USER_ID", referencedColumnName = "ID")
    private User user;

    @OneToOne(optional = false)
    @JoinColumn(name = "COURSE_ID", referencedColumnName = "ID")
    private Course course;

    private String content;

    public Progress(User user, Course course, String content) {
        this.user = user;
        this.course = course;
        this.content = content;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Progress progress = (Progress) o;
        return id != null && Objects.equals(id, progress.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
