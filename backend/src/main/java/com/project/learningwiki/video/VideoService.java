package com.project.learningwiki.video;

import org.springframework.stereotype.Service;

@Service
public class VideoService {
    private VideoRepository videoRepository;

    public VideoService(VideoRepository videoRepository) {
        this.videoRepository = videoRepository;
    }
}
