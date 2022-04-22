package com.project.learningwiki.mentoring;

import com.project.learningwiki.user.UserService;
import com.project.learningwiki.utils.ResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/mentoring")
@PreAuthorize("isAuthenticated()")
public class MentoringController {
    private MentoringService mentoringService;
    private UserService userService;

    public MentoringController(MentoringService mentoringService, UserService userService) {
        this.mentoringService = mentoringService;
        this.userService = userService;
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
}
