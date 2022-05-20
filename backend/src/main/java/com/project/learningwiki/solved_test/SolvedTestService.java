package com.project.learningwiki.solved_test;

import com.project.learningwiki.test.Test;
import com.project.learningwiki.test.TestRepository;
import com.project.learningwiki.user.User;
import com.project.learningwiki.user.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SolvedTestService {
    private final SolvedTestRepository solvedTestRepository;
    private final TestRepository testRepository;
    private final UserService userService;

    public SolvedTestService(SolvedTestRepository solvedTestRepository, TestRepository testRepository, UserService userService) {
        this.solvedTestRepository = solvedTestRepository;
        this.testRepository = testRepository;
        this.userService = userService;
    }

    public void addSolvedTest(SolvedTestDto solvedTestDto) {
        User user = userService.findUserByEmail(solvedTestDto.getUserEmail());
        Optional<Test> test = testRepository.findById(solvedTestDto.getTestId());

        if (user != null && test.isPresent()) {
            SolvedTest solvedTest = solvedTestRepository.findByTestIdAndUserId(solvedTestDto.getTestId(), user.getId());
            if (solvedTest != null) {
                if (solvedTest.getScore() < solvedTestDto.getScore()) {
                    solvedTest.setScore(solvedTestDto.getScore());
                    solvedTest.setMarkedAnswers(solvedTestDto.getMarkedAnswers());
                    solvedTest.setTimestamp(new Date());
                }
                solvedTest.setAttempts(solvedTest.getAttempts() + 1);
                solvedTestRepository.save(solvedTest);
            } else {
                solvedTestRepository.findById(solvedTestDto.getTestId());
                solvedTestRepository.save(new SolvedTest(user, test.get(), solvedTestDto.getScore(), solvedTestDto.getMarkedAnswers(), 1, new Date()));
            }
        }
    }

    public List<SolvedTest> getTestsByUserEmailAndCourseName(String userEmail, String courseName) {
        User user = userService.findUserByEmail(userEmail);
        return solvedTestRepository.findByUserId(user.getId())
                .stream()
                .filter(solvedTest -> solvedTest.getScore() == solvedTest.getTest().getQuestions().size() - 1)
                .filter(solvedTest -> solvedTest.getTest().getCourseName().equals(courseName))
                .collect(Collectors.toList());
    }

    public List<SolvedTest> getAttemptedTestsByUser(User user) {
        return solvedTestRepository.findByUserId(user.getId())
                .stream()
                .filter(solvedTest -> solvedTest.getScore() != solvedTest.getTest().getQuestions().size() - 1)
                .collect(Collectors.toList());
    }

    public List<SolvedTest> getSolvedTestsByUser(User user) {
        return solvedTestRepository.findByUserId(user.getId())
                .stream()
                .filter(solvedTest -> solvedTest.getScore() == solvedTest.getTest().getQuestions().size() - 1)
                .collect(Collectors.toList());
    }

    public List<SolvedTest> getAllTestsByUser(User user) {
        return new ArrayList<>(solvedTestRepository.findByUserId(user.getId()));
    }

    public SolvedTest getSolvedTestByTestIdAndUserId(Integer testId, Integer userId) {
        return solvedTestRepository.findByTestIdAndUserId(testId, userId);
    }

    public SolvedTest getSolvedTestById(Integer solvedTestId) {
        return solvedTestRepository.findById(solvedTestId).orElse(null);
    }
}
