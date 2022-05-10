package com.project.learningwiki.feedback_mentoring;

import com.project.learningwiki.solved_test.SolvedTestService;
import com.project.learningwiki.user.UserService;
import com.project.learningwiki.utils.ResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/feedback_mentoring")
@PreAuthorize("isAuthenticated()")
public class FeedbackMentoringController {
    private final FeedbackMentoringService feedbackMentoringService;
    private final UserService userService;
    private final SolvedTestService solvedTestService;

    public FeedbackMentoringController(FeedbackMentoringService feedbackMentoringService, UserService userService, SolvedTestService solvedTestService) {
        this.feedbackMentoringService = feedbackMentoringService;
        this.userService = userService;
        this.solvedTestService = solvedTestService;
    }

    @PostMapping("/add/{content}/{userId}/{solvedTestId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> addFeedback(@PathVariable String content, @PathVariable Integer userId, @PathVariable Integer solvedTestId, HttpServletRequest request) {
        var professor = userService.getRequestUser(request);
        var student = userService.findUserById(userId);
        var solvedTest = solvedTestService.getSolvedTestById(solvedTestId);

        if (content != null && professor != null && student != null && solvedTest != null) {
            feedbackMentoringService.addFeedback(new FeedbackMentoring(content, professor, student, solvedTest));
            return ResponseEntity.ok(new ResponseDto("Success", true));
        }

        return ResponseEntity.badRequest().body(new ResponseDto("Bad request", false));
    }

    @GetMapping("/by_userId/{userId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getFeedbacksByUserId(@PathVariable Integer userId, HttpServletRequest httpServletRequest) {
        var feedbacks = feedbackMentoringService.getFeedbacksByUserId(userId);
        if (feedbacks != null) {
            return ResponseEntity.ok(feedbacks);
        }

        return ResponseEntity.badRequest().body(new ResponseDto("Bad request", List.of()));
    }

    @GetMapping("/by_solvedTestId/{solvedTestId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getFeedbacksBySolvedTestId(@PathVariable Integer solvedTestId, HttpServletRequest httpServletRequest) {
        var feedbacks = feedbackMentoringService.getFeedbacksBySolvedTestId(solvedTestId);
        if (feedbacks != null) {
            return ResponseEntity.ok(feedbacks);
        }

        return ResponseEntity.badRequest().body(new ResponseDto("Bad request", List.of()));
    }
}
