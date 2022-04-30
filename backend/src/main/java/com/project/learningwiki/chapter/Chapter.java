package com.project.learningwiki.chapter;

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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String description;
    private String content;

//    @ManyToOne
//    @JoinColumn(name = "TEST_ID")
//    private Test test;

//    public Chapter(String name, String description, String content, Test test) {
//        this.name = name;
//        this.description = description;
//        this.content = content;
//        this.test = test;
//    }


    public Chapter(String name, String description, String content) {
        this.name = name;
        this.description = description;
        this.content = content;
    }

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
