package com.project.learningwiki.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RankingDto {
    private String studentName;
    private String mentorName;
    private Integer noSolvedTests;
    private Integer noReceivedFeedbacks;

    public RankingDto(String studentName, String mentorName, Integer noSolvedTests, Integer noReceivedFeedbacks) {
        this.studentName = studentName;
        this.mentorName = mentorName;
        this.noSolvedTests = noSolvedTests;
        this.noReceivedFeedbacks = noReceivedFeedbacks;
    }
}
