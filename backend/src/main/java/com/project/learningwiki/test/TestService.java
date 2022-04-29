package com.project.learningwiki.test;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TestService {
    private final TestRepository testRepository;

    public TestService(TestRepository testRepository) {
        this.testRepository = testRepository;
    }

    public List<Test> getTestsByNameAndYear(String courseName, Integer year) {
        return testRepository.findByCourseNameAndYear(courseName, year);
    }

    public Test getTestsById(Integer testId) {
        Optional<Test> testOptional = testRepository.findById(testId);
        return testOptional.orElse(null);
    }
}
