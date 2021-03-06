package com.project.learningwiki.mentoring;

import com.project.learningwiki.user.User;
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
@Table(name = "mentoring")
public class Mentoring {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @OneToOne(cascade = CascadeType.ALL)
    private User student;

    @ManyToOne(cascade = CascadeType.ALL)
    private User professor;

    public Mentoring(User student, User professor) {
        this.student = student;
        this.professor = professor;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Mentoring mentoring = (Mentoring) o;
        return id != null && Objects.equals(id, mentoring.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
