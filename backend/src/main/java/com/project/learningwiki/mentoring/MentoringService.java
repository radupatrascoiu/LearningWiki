package com.project.learningwiki.mentoring;

import org.springframework.stereotype.Service;

@Service
public class MentoringService {
    private MentoringRepository mentoringRepository;

    public MentoringService(MentoringRepository mentoringRepository) {
        this.mentoringRepository = mentoringRepository;
    }
}
