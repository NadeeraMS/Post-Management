package com.example.foodie.model;

import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@Document(collection = "posts")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    @Id
    private String id;

    @NotNull
    private String title;

    private String description;
    private String image;
    private String location;
    private String[] comments;
    private Date createdAt;
    private Date updatedAt;

}
