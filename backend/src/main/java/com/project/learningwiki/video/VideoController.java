package com.project.learningwiki.video;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/videos/")
//@PreAuthorize("isAuthenticated()")
public class VideoController {
    private VideoService videoService;

    public VideoController(VideoService videoService) {
        this.videoService = videoService;
    }
}
