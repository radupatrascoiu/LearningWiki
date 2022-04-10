package com.project.learningwiki.chapter;

import org.springframework.stereotype.Service;

@Service
public class ChapterService {
    private ChapterRepository chapterRepository;

    public ChapterService(ChapterRepository chapterRepository) {
        this.chapterRepository = chapterRepository;
    }
}
