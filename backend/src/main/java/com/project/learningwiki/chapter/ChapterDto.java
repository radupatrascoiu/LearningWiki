package com.project.learningwiki.chapter;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChapterDto {
    private Integer id;
    private String name;
    private String description;
    private String content;

    public ChapterDto(Chapter chapter) {
        this.id = chapter.getId();
        this.name = chapter.getContent();
        this.description = chapter.getDescription();
        this.content = chapter.getContent();
    }

    public ChapterDto() {
    }
}
