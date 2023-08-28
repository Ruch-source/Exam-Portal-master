package com.project.examportalbackend.repository;


import com.project.examportalbackend.models.Category;
import com.project.examportalbackend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Query(value = "select * from Categories c where c.cat_id=?1", nativeQuery = true)
   Category findByCatId(long quizid);
}

