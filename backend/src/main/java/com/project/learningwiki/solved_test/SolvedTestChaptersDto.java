package com.project.learningwiki.solved_test;

import com.project.learningwiki.chapter.Chapter;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SolvedTestChaptersDto {
    private Chapter chapter;
    private Integer noMistakes;

    public SolvedTestChaptersDto(Chapter chapter, Integer noMistakes) {
        this.chapter = chapter;
        this.noMistakes = noMistakes;
    }
}
