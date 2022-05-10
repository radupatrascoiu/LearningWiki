package com.project.learningwiki.solved_test;

import com.project.learningwiki.marked_answer.MarkedAnswer;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class SolvedTestDto {
    private String userEmail;
    private Integer testId;
    private Integer score;
    private List<MarkedAnswer> markedAnswers;
    private Integer attempts;

    public SolvedTestDto(String userEmail, Integer testId, Integer score, List<MarkedAnswer> markedAnswers, Integer attempts) {
        this.userEmail = userEmail;
        this.testId = testId;
        this.score = score;
        this.markedAnswers = markedAnswers;
        this.attempts = attempts;
    }
}
