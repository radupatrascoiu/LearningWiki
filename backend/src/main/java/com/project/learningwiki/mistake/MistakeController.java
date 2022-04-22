package com.project.learningwiki.mistake;

import com.project.learningwiki.utils.ResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/mistakes")
@PreAuthorize("isAuthenticated()")
public class MistakeController {
    private final MistakeService mistakeService;

    public MistakeController(MistakeService mistakeService) {
        this.mistakeService = mistakeService;
    }

    @PostMapping("/add")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> addMistake(@RequestBody MistakeDto mistakeDto,
                                             HttpServletRequest request) {
        if (mistakeDto != null) {
            mistakeService.addMistake(mistakeDto);
            return ResponseEntity.ok(new ResponseDto("Success", true));
        }

        return ResponseEntity.badRequest().body(new ResponseDto("Bad request", false));
    }

    @GetMapping()
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getMistakes(HttpServletRequest httpServletRequest) {
        var mistakes = mistakeService.getAllMistakes();
        if (mistakes != null) {
            return ResponseEntity.ok(mistakes);
        }

        return ResponseEntity.badRequest().body(new ResponseDto("Bad request", List.of()));
    }

    @DeleteMapping("/delete/{mistakeId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> deleteMistake(@PathVariable Integer mistakeId, HttpServletRequest httpServletRequest) {
        mistakeService.deleteMistakeById(mistakeId);
        return ResponseEntity.ok(true);
    }
}
