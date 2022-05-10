package com.project.learningwiki.feedback_mentoring;

import com.project.learningwiki.solved_test.SolvedTest;
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
@Table(name = "feedback_mentoring")
public class FeedbackMentoring {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(columnDefinition="TEXT")
    private String content;

    @OneToOne
    private User mentor;

    @OneToOne
    private User student;

    @ManyToOne
    private SolvedTest solvedTest;

    public FeedbackMentoring(String content, User mentor, User student, SolvedTest solvedTest) {
        this.content = content;
        this.mentor = mentor;
        this.student = student;
        this.solvedTest = solvedTest;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        FeedbackMentoring that = (FeedbackMentoring) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
