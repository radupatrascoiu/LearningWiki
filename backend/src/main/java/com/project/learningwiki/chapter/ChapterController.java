package com.project.learningwiki.chapter;

import com.project.learningwiki.utils.ResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/chapters")
@PreAuthorize("isAuthenticated()")
public class ChapterController {
    private final ChapterService chapterService;

    public ChapterController(ChapterService chapterService) {
        this.chapterService = chapterService;
    }

    @GetMapping("/{chapterId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getChapter(@PathVariable Integer chapterId) {
        var chapter = chapterService.getChapterById(chapterId);
        if (chapter == null) {
            return ResponseEntity.badRequest()
                    .body(new ResponseDto("This course does not exists.", false));
        }
        return ResponseEntity.ok(chapter);
    }

    @PutMapping("/edit")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getChapter(@RequestBody ChapterDto chapterDto,
                                        HttpServletRequest request) {
        Chapter chapterById = chapterService.findById(chapterDto.getId());
        if (chapterById != null) {
//            chapterById.setName(chapterDto.getName());
//            chapterById.setDescription(chapterDto.getDescription());
            chapterById.setContent(chapterDto.getContent());

            return ResponseEntity.ok(chapterService.save(chapterById));
        }

        return ResponseEntity.badRequest().body(new ResponseDto("Bad request", false));
    }
}
