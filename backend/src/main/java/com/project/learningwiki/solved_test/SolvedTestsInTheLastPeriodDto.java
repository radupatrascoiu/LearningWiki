package com.project.learningwiki.solved_test;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Getter
@Setter
public class SolvedTestsInTheLastPeriodDto {
    private Integer noClass;
    private double noSolvedTests;

    public SolvedTestsInTheLastPeriodDto(Integer noClass, double noSolvedTests) {
        this.noClass = noClass;
        BigDecimal bd = new BigDecimal(noSolvedTests).setScale(2, RoundingMode.HALF_UP);
        this.noSolvedTests = bd.doubleValue();
    }
}
