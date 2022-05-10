package com.project.learningwiki.mentoring;

import com.project.learningwiki.solved_test.SolvedTest;
import com.project.learningwiki.user.User;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class MentoringDto {
    private User user;
    private List<SolvedTest> attemptedTests;
    private List<SolvedTest> solvedTests;
    private List<SolvedTest> allTests;

    public MentoringDto(User user, List<SolvedTest> attemptedTests, List<SolvedTest> solvedTests, List<SolvedTest> allTests) {
        this.user = user;
        this.attemptedTests = attemptedTests;
        this.solvedTests = solvedTests;
        this.allTests = allTests;
    }
}
