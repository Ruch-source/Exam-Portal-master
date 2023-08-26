package com.project.examportalbackend.repository;

import com.project.examportalbackend.models.Category;
import com.project.examportalbackend.models.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
    List<Quiz> findByCategory(Category category);

    Quiz findByQuizId(Long quizId);

}
