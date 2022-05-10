package com.project.learningwiki.solved_test;

import com.project.learningwiki.marked_answer.MarkedAnswer;
import com.project.learningwiki.test.Test;
import com.project.learningwiki.user.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "solved_tests")
public class SolvedTest {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "TEST_ID", referencedColumnName = "ID")
    private Test test;

    private Integer score;

    @OneToMany(cascade = CascadeType.ALL)
    private List<MarkedAnswer> markedAnswers;

    private Integer attempts;

    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;

    public SolvedTest(User user, Test test, Integer score, List<MarkedAnswer> markedAnswers, Integer attempts, Date timestamp) {
        this.user = user;
        this.test = test;
        this.score = score;
        this.markedAnswers = markedAnswers;
        this.attempts = attempts;
        this.timestamp = timestamp;
    }

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

    @Override
    public String toString() {
        return "SolvedTest{" +
                "id=" + id +
                ", user=" + user +
                ", test=" + test +
                ", score=" + score +
                ", markedAnswers=" + markedAnswers +
                ", attempts=" + attempts +
                '}';
    }
}
