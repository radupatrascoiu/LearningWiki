package com.project.learningwiki.mentoring;

import com.project.learningwiki.solved_test.SolvedTestService;
import com.project.learningwiki.user.User;
import com.project.learningwiki.user.UserService;
import com.project.learningwiki.utils.ResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/mentoring")
@PreAuthorize("isAuthenticated()")
public class MentoringController {
    private final MentoringService mentoringService;
    private final UserService userService;
    private final SolvedTestService solvedTestService;

    public MentoringController(MentoringService mentoringService, UserService userService, SolvedTestService solvedTestService) {
        this.mentoringService = mentoringService;
        this.userService = userService;
        this.solvedTestService = solvedTestService;
    }

    @PostMapping("/add/{professorId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> addNewMentoring(@PathVariable Integer professorId,
                                        HttpServletRequest request) {
        var currentUser = userService.getRequestUser(request);
        var professor = userService.findUserById(professorId);

        if (currentUser != null && professor != null) {
            mentoringService.addMentoring(currentUser, professor);
            return ResponseEntity.ok(new ResponseDto("Success", true));
        }

        return ResponseEntity.badRequest().body(new ResponseDto("Bad request", false));
    }

    @GetMapping("/my_students")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getMyStudents(HttpServletRequest request) {
        var currentUser = userService.getRequestUser(request);

        if (currentUser != null) {
            List<User> myStudents = mentoringService.getMyStudents(currentUser);

            List<MentoringDto> mentoringDtoList = myStudents
                    .stream()
                    .map(user -> new MentoringDto(
                            user,
                            solvedTestService.getAttemptedTestsByUser(user),
                            solvedTestService.getSolvedTestsByUser(user),
                            solvedTestService.getAllTestsByUser(user)))
                    .collect(Collectors.toList());
            return ResponseEntity.ok(mentoringDtoList);
        } else {
            return ResponseEntity.badRequest()
                    .body(new ResponseDto("This user doesn't have solved tests.", false));
        }
    }
}
