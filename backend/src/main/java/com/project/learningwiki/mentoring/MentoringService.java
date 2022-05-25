package com.project.learningwiki.mentoring;

import com.project.learningwiki.user.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MentoringService {
    private final MentoringRepository mentoringRepository;

    public MentoringService(MentoringRepository mentoringRepository) {
        this.mentoringRepository = mentoringRepository;
    }

    public void addMentoring(User studentId, User professorId) {
        mentoringRepository.save(new Mentoring(studentId, professorId));
    }

    public List<User> getMyStudents(User professor) {
        List<Mentoring> mentoringList = mentoringRepository.findByProfessorId(professor.getId());
        return mentoringList.stream().map(Mentoring::getStudent).collect(Collectors.toList());
    }

    public User getMyMentor(User user) {
        Mentoring mentoring = mentoringRepository.findByStudentId(user.getId());
        if (mentoring != null) {
            return mentoring.getProfessor();
        }

        return null;
    }
}
