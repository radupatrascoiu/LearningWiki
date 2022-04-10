package com.project.learningwiki.feedback_mentoring;

import com.project.learningwiki.course.Course;
import com.project.learningwiki.feedback.Feedback;
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

    @OneToOne(optional = false)
    @JoinColumn(name = "FEEDBACK_ID", referencedColumnName = "ID")
    private Feedback feedback;

    @OneToOne(optional = false)
    @JoinColumn(name = "MENTOR_ID", referencedColumnName = "ID")
    private User mentor;

    @OneToOne(optional = false)
    @JoinColumn(name = "STUDENT_ID", referencedColumnName = "ID")
    private User student;

    @OneToOne(optional = false)
    @JoinColumn(name = "COURSE_ID", referencedColumnName = "ID")
    private Course course;

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
