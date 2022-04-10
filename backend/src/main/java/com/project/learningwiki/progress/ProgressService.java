package com.project.learningwiki.progress;

import org.springframework.stereotype.Service;

@Service
public class ProgressService {
    private ProgressRepository progressRepository;

    public ProgressService(ProgressRepository progressRepository) {
        this.progressRepository = progressRepository;
    }
}
