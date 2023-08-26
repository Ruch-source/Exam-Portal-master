package com.project.examportalbackend.repository;

import com.project.examportalbackend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    @Query(value = "select * from users u where u.user_id=?1", nativeQuery = true)
    User findByUserId(long userId);
}
