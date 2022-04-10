package com.project.learningwiki.course;

import com.project.learningwiki.progress.Progress;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = "courses")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;

//    private Integer professorId;
    @OneToOne(mappedBy = "course", cascade = CascadeType.ALL)
//    @JoinColumn(name = "PROGRESS_ID", referencedColumnName = "ID")
    private Progress progress;
    private String infos;
    private String requirements;
    private String photo;

    public Course(String name, String infos, String requirements, String photo) {
        this.name = name;
        this.infos = infos;
        this.requirements = requirements;
        this.photo = photo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Course course = (Course) o;
        return id != null && Objects.equals(id, course.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

    @Override
    public String toString() {
        return "Course{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", progress=" + progress +
                ", infos='" + infos + '\'' +
                ", requirements='" + requirements + '\'' +
                '}';
    }
}
