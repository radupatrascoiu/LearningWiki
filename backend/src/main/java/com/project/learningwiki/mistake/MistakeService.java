package com.project.learningwiki.mistake;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MistakeService {
    private final MistakeRepository mistakeRepository;

    public MistakeService(MistakeRepository mistakeRepository) {
        this.mistakeRepository = mistakeRepository;
    }

    public void addMistake(MistakeDto mistakeDto) {
        mistakeRepository.save(new Mistake(mistakeDto.getId(), mistakeDto.getCourseName(), mistakeDto.getClassCourse(), mistakeDto.getChapter(), mistakeDto.getDetails()));
    }

    public List<MistakeDto> getAllMistakes() {
        List<Mistake> mistakeList = mistakeRepository.findAll();
        List<MistakeDto> mistakes = new ArrayList<>();
        for (Mistake mistake : mistakeList) {
            mistakes.add(new MistakeDto(mistake));
        }
        return mistakes;
    }

    public void deleteMistakeById(Integer mistakeId) {
        Mistake mistakeToDelete = mistakeRepository.getById(mistakeId);
        mistakeRepository.delete(mistakeToDelete);
    }
}
