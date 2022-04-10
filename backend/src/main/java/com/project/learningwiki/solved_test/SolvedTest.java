package com.project.learningwiki.solved_test;

import com.project.learningwiki.test.Test;
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
@Table(name = "solved_tests")
public class SolvedTest {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "TEST_ID", referencedColumnName = "ID")
    private Test test;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    private String content;

    private Integer score;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        SolvedTest that = (SolvedTest) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
