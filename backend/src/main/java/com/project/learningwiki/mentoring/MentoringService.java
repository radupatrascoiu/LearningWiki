package com.project.learningwiki.mentoring;

import com.project.learningwiki.user.User;
import org.springframework.stereotype.Service;

@Service
public class MentoringService {
    private final MentoringRepository mentoringRepository;

    public MentoringService(MentoringRepository mentoringRepository) {
        this.mentoringRepository = mentoringRepository;
    }

    public void addMentoring(User studentId, User professorId) {
        mentoringRepository.save(new Mentoring(studentId, professorId));
    }
}
