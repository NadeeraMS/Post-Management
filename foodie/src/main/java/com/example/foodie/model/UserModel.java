package com.example.foodie.model;

import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor(force = true)
@NotNull
@Document(collection = "user")
public class UserModel {

    @Id
    private String id;

    @NotNull(message = "Username is required")
    private String username;

    @NotNull(message = "first name is required")
    private String f_name;

    @NotNull(message = "last name is required")
    private String l_name;

    @NotNull(message = "description is required")
    private String description;

    @NotNull(message = "email is required")
    private String email;

    @NotNull(message = "phone is required")
    private String phone;

    @NotNull(message = "age is required")
    private String age;

    private String password;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    private String SocialMedia;

    private Boolean completed;
    private Date createdAt;
    private Date updatedAt;
}
