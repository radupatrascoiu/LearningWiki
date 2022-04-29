package com.project.learningwiki.video;

import com.project.learningwiki.utils.ResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/videos")
@PreAuthorize("isAuthenticated()")
public class VideoController {
    private final VideoService videoService;

    public VideoController(VideoService videoService) {
        this.videoService = videoService;
    }

    @GetMapping("/{courseName}/{year}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getVideosByCourseAndYear(@PathVariable(value = "courseName") String courseName, @PathVariable(value = "year") Integer year) {
        var videos = videoService.getVideosByNameAndYear(courseName, year);

        if (videos == null) {
            return ResponseEntity.badRequest()
                    .body(new ResponseDto("This course does not exists.", false));
        }
        return ResponseEntity.ok(videos);
    }

    @GetMapping("/{videoId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getVideoById(@PathVariable Integer videoId) {
        var video = videoService.getVideoById(videoId);

        if (video == null) {
            return ResponseEntity.badRequest()
                    .body(new ResponseDto("This course does not exists.", false));
        }
        return ResponseEntity.ok(video);
    }
}
