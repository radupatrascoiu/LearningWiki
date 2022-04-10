package com.project.learningwiki.chapter;

import com.project.learningwiki.test.Test;
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
@Table(name = "chapters")
public class Chapter {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;
//    private Integer year;
    private String content;

    @ManyToOne
    @JoinColumn(name = "TEST_ID")
    private Test test;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Chapter chapter = (Chapter) o;
        return id != null && Objects.equals(id, chapter.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
