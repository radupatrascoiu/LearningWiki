package com.project.learningwiki.question;

import com.project.learningwiki.answer.Answer;
import com.project.learningwiki.chapter.Chapter;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "questions")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String title;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Answer> answers;

    @ManyToOne
    private Chapter chapter;

    private Integer correctOptionIndex;

    public Question(String title, List<Answer> answers, Chapter chapter, Integer correctOptionIndex) {
        this.title = title;
        this.answers = answers;
        this.chapter = chapter;
        this.correctOptionIndex = correctOptionIndex;
    }
}
