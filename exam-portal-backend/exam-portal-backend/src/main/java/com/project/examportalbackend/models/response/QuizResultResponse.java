package com.project.examportalbackend.models.response;

import com.project.examportalbackend.models.Category;
import com.project.examportalbackend.models.Quiz;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "quiz_results")
@Builder
public class QuizResultResponse {


    private Long quizResId;

    private String userName;

    private float totalObtainedMarks;

    private String attemptDatetime;

    private Quiz quiz;

    private String categoryName;


}
