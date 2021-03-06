package com.project.learningwiki.solved_test;

import com.project.learningwiki.chapter.Chapter;
import com.project.learningwiki.course_chapter.CourseChapterService;
import com.project.learningwiki.feedback_mentoring.FeedbackMentoring;
import com.project.learningwiki.feedback_mentoring.FeedbackMentoringService;
import com.project.learningwiki.marked_answer.MarkedAnswer;
import com.project.learningwiki.mentoring.MentoringService;
import com.project.learningwiki.test.Test;
import com.project.learningwiki.test.TestRepository;
import com.project.learningwiki.user.RankingDto;
import com.project.learningwiki.user.User;
import com.project.learningwiki.user.UserService;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@Service
public class SolvedTestService {
    private final SolvedTestRepository solvedTestRepository;
    private final TestRepository testRepository;
    private final UserService userService;
    private final MentoringService mentoringService;
    private final FeedbackMentoringService feedbackMentoringService;
    private final CourseChapterService courseChapterService;

    public SolvedTestService(SolvedTestRepository solvedTestRepository, TestRepository testRepository, UserService userService, MentoringService mentoringService, FeedbackMentoringService feedbackMentoringService, CourseChapterService courseChapterService) {
        this.solvedTestRepository = solvedTestRepository;
        this.testRepository = testRepository;
        this.userService = userService;
        this.mentoringService = mentoringService;
        this.feedbackMentoringService = feedbackMentoringService;
        this.courseChapterService = courseChapterService;
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
                .filter(solvedTest -> solvedTest.getScore() == solvedTest.getTest().getQuestions().size())
                .filter(solvedTest -> solvedTest.getTest().getCourseName().equals(courseName))
                .collect(Collectors.toList());
    }

    public List<SolvedTest> getAttemptedTestsByUser(User user) {
        return solvedTestRepository.findByUserId(user.getId())
                .stream()
                .filter(solvedTest -> solvedTest.getScore() != solvedTest.getTest().getQuestions().size())
                .collect(Collectors.toList());
    }

    public List<SolvedTest> getSolvedTestsByUser(User user) {
        return solvedTestRepository.findByUserId(user.getId())
                .stream()
                .filter(solvedTest -> solvedTest.getScore() == solvedTest.getTest().getQuestions().size())
                .collect(Collectors.toList());
    }

    public List<SolvedTest> getLastSolvedTestsByUser(User user) {
        return solvedTestRepository.findByUserId(user.getId())
                .stream()
                .filter(solvedTest -> solvedTest.getScore() == solvedTest.getTest().getQuestions().size())
                .sorted(Comparator.comparing(SolvedTest::getTimestamp).reversed())
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

    public List<RankingDto> generateRanking() {
        List<RankingDto> rankings = new ArrayList<>();

        List<User> users = userService.getAllStudents();
        if (users != null) {
            for (User user : users) {
                if (user != null) {
                    User myMentor = mentoringService.getMyMentor(user);
                    List<SolvedTest> solvedTests = getSolvedTestsByUser(user);
                    List<FeedbackMentoring> feedbacksByUserId = feedbackMentoringService.getFeedbacksByUserId(user.getId());

                    RankingDto rankingDto = new RankingDto(user.getName(), myMentor != null ? myMentor.getName() : "Mentor neasignat", solvedTests.size(), feedbacksByUserId.size());
                    rankings.add(rankingDto);
                }
            }
        }

        rankings.sort(Comparator.comparing(RankingDto::getNoSolvedTests).reversed());
        return rankings;
    }

    public List<SolvedTestsInTheLastPeriodDto> getTestsInTheLastPeriodByClassAndCourseName(User user, String courseName) {
        List<SolvedTestsInTheLastPeriodDto> list = new ArrayList<>();
        List<SolvedTest> allTestsByUser = getAllTestsByUser(user).stream().filter(x -> x.getTest().getCourseName().equals(courseName)).collect(Collectors.toList());

        int size = allTestsByUser.size();
        if (size != 0) {
            List<SolvedTest> testsForClass9 = allTestsByUser.stream().filter(x -> x.getTest().getYear() == 9).collect(Collectors.toList());
            List<SolvedTest> testsForClass10 = allTestsByUser.stream().filter(x -> x.getTest().getYear() == 10).collect(Collectors.toList());
            List<SolvedTest> testsForClass11 = allTestsByUser.stream().filter(x -> x.getTest().getYear() == 11).collect(Collectors.toList());
            List<SolvedTest> testsForClass12 = allTestsByUser.stream().filter(x -> x.getTest().getYear() == 12).collect(Collectors.toList());

            list.add(new SolvedTestsInTheLastPeriodDto(9, (float) (testsForClass9.size() * 100) / (float) size));
            list.add(new SolvedTestsInTheLastPeriodDto(10, (float) (testsForClass10.size() * 100) / (float) size));
            list.add(new SolvedTestsInTheLastPeriodDto(11, (float) (testsForClass11.size() * 100) / (float) size));
            list.add(new SolvedTestsInTheLastPeriodDto(12, (float) (testsForClass12.size() * 100) / (float) size));
        }
        return list;
    }

    public List<SolvedTestChaptersDto> getChaptersWithMostMistakesInSolvedTestsByCourseName(String courseName) {
        synchronized (this) {
            List<SolvedTest> attemptedTests = solvedTestRepository.findAll()
                    .stream()
                    .filter(solvedTest -> courseName.equals(solvedTest.getTest().getCourseName()))
                    .filter(solvedTest -> solvedTest.getScore() != solvedTest.getTest().getQuestions().size()).collect(Collectors.toList());

            List<Chapter> chapters = courseChapterService.getChaptersByCourseName(courseName);

            ConcurrentHashMap<Chapter, Integer> solvedTestChaptersHashMap = new ConcurrentHashMap<>();

            for (Chapter chapter : chapters) {
                solvedTestChaptersHashMap.put(chapter, 0);
            }

            for (SolvedTest solvedTest : attemptedTests) {
                if (solvedTest != null) {
                    if (solvedTest.getMarkedAnswers() != null) {
                        List<MarkedAnswer> markedAnswers = solvedTest.getMarkedAnswers();
                        for (int i = 0; i < markedAnswers.size(); i++) {
                            if (!Objects.equals(markedAnswers.get(i).getIndex(), solvedTest.getTest().getQuestions().get(i).getCorrectOptionIndex())) {
                                Chapter chapter = solvedTest.getTest().getQuestions().get(i).getChapter();
                                solvedTestChaptersHashMap.replace(chapter, solvedTestChaptersHashMap.get(chapter) + 1);
                            }
                        }
                    }
                }
            }

            List<SolvedTestChaptersDto> solvedTestChapters = new ArrayList<>();

            for (Map.Entry<Chapter, Integer> entry : solvedTestChaptersHashMap.entrySet()) {
                Chapter key = entry.getKey();
                Integer value = entry.getValue();
                if (value != 0) {
                    solvedTestChapters.add(new SolvedTestChaptersDto(key, value));
                }
            }

            solvedTestChapters.sort(Comparator.comparing(x -> x.getChapter().getNumber()));

            return solvedTestChapters;
        }
    }

    public SolvedTestChaptersDto getChapterWithMostMistakesInSolvedTestsByCourseName(String courseName) {
        synchronized (this) {
            List<SolvedTest> attemptedTests = solvedTestRepository.findAll()
                    .stream()
                    .filter(solvedTest -> courseName.equals(solvedTest.getTest().getCourseName()))
                    .filter(solvedTest -> solvedTest.getScore() != solvedTest.getTest().getQuestions().size()).collect(Collectors.toList());

            List<Chapter> chapters = courseChapterService.getChaptersByCourseName(courseName);

            ConcurrentHashMap<Chapter, Integer> solvedTestChaptersHashMap = new ConcurrentHashMap<>();

            for (Chapter chapter : chapters) {
                solvedTestChaptersHashMap.put(chapter, 0);
            }

            for (SolvedTest solvedTest : attemptedTests) {
                if (solvedTest != null) {
                    if (solvedTest.getMarkedAnswers() != null) {
                        List<MarkedAnswer> markedAnswers = solvedTest.getMarkedAnswers();
                        for (int i = 0; i < markedAnswers.size(); i++) {
                            if (!Objects.equals(markedAnswers.get(i).getIndex(), solvedTest.getTest().getQuestions().get(i).getCorrectOptionIndex())) {
                                Chapter chapter = solvedTest.getTest().getQuestions().get(i).getChapter();
                                solvedTestChaptersHashMap.replace(chapter, solvedTestChaptersHashMap.get(chapter) + 1);
                            }
                        }
                    }
                }
            }

            List<SolvedTestChaptersDto> solvedTestChapters = new ArrayList<>();

            for (Map.Entry<Chapter, Integer> entry : solvedTestChaptersHashMap.entrySet()) {
                Chapter key = entry.getKey();
                Integer value = entry.getValue();
                if (value != 0) {
                    solvedTestChapters.add(new SolvedTestChaptersDto(key, value));
                }
            }

            solvedTestChapters.sort(Comparator.comparing(SolvedTestChaptersDto::getNoMistakes).reversed());

            if (solvedTestChapters.size() > 0) {
                return solvedTestChapters.get(0);
            }

            return new SolvedTestChaptersDto(new Chapter(), 0);
        }
    }
}
