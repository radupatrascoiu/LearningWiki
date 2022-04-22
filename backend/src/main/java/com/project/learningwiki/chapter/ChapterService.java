package com.project.learningwiki.chapter;

import org.springframework.stereotype.Service;

@Service
public class ChapterService {
    private final ChapterRepository chapterRepository;

    public ChapterService(ChapterRepository chapterRepository) {
        this.chapterRepository = chapterRepository;
    }

    public ChapterDto getChapterById(Integer chapterId) {
        Chapter chapter = chapterRepository.findById(chapterId).orElse(null);
        if (chapter != null) {
            return new ChapterDto(chapter);
        }
        return null;
    }

    public Chapter findById(Integer chapterId) {
        return chapterRepository.findById(chapterId).orElse(null);
    }

    public Chapter save(Chapter chapter) {
        return chapterRepository.save(chapter);
    }
}
