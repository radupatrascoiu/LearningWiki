package com.project.learningwiki.test;

import org.springframework.stereotype.Service;

@Service
public class TestService {
    private TestRepository testRepository;

    public TestService(TestRepository testRepository) {
        this.testRepository = testRepository;
    }
}
