package com.example.foodie.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Document(collection = "restaurant")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Restaurant {
    @Id
    private String id;

    @NotNull(message = "Name is required")
    private String name;

    @NotNull(message = "Type is required")
    private String type;

    @NotNull(message = "Description is required")
    private String description;

    @NotNull(message = "Image is required")
    private String image;

    @NotNull(message = "Address is required")
    private String address;

    @NotNull(message = "Mobile is required")
    private String mobile;

    @NotNull(message = "Website is required")
    private String website;

    private String[] menu;

    private String[] reviews;

    @NotNull(message = "Business Hours is required")
    private String businessHours;

    private Date createdAt;
}
