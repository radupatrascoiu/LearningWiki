package com.project.learningwiki.solved_test;

import org.springframework.stereotype.Service;

@Service
public class SolvedTestService {
    private SolvedTestRepository solvedTestRepository;

    public SolvedTestService(SolvedTestRepository solvedTestRepository) {
        this.solvedTestRepository = solvedTestRepository;
    }
}
