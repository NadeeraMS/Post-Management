package com.example.foodie.repository;

import com.example.foodie.model.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends MongoRepository<UserModel, String> {
    List<UserModel> findByUsernameContainingIgnoreCase(String username);

    @Query("{ 'username': ?0 }")
    Optional<UserModel> findByUsername(String username);
}
