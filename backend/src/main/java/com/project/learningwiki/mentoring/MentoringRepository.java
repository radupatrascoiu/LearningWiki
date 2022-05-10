package com.project.learningwiki.mentoring;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MentoringRepository extends JpaRepository<Mentoring, Integer> {
    Mentoring findByStudentId(Integer studentId);
    List<Mentoring> findByProfessorId(Integer professorId);
}
