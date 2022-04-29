package com.project.learningwiki.video;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VideoService {
    private final VideoRepository videoRepository;

    public VideoService(VideoRepository videoRepository) {
        this.videoRepository = videoRepository;
    }

    public List<Video> getVideosByNameAndYear(String courseName, Integer year) {
        return videoRepository.findByCourseNameAndYear(courseName, year);
    }

    public Video getVideoById(Integer testId) {
        Optional<Video> videoOptional = videoRepository.findById(testId);
        return videoOptional.orElse(null);
    }
}
