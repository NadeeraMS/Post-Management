package com.example.foodie.controller;

import com.example.foodie.exception.UserCollectionException;
import com.example.foodie.model.UserModel;
import jakarta.validation.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.example.foodie.repository.UserRepository;
import org.springframework.web.bind.annotation.*;
import java.util.Date;
import java.util.Optional;
import java.util.List;
import com.example.foodie.service.userService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class userController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private userService userService;

    @GetMapping("/fusers")
    public ResponseEntity<?> getAllUsers() {
        // List<UserModel>users = userRepository.findAll();
        List<UserModel> users = userService.getAllUsers();
        // if (users.size() > 0) {
        // return new ResponseEntity<List<UserModel>>(users, HttpStatus.OK);
        // } else {
        // return new ResponseEntity<>("No foodies found ", HttpStatus.NOT_FOUND);
        // }
        return new ResponseEntity<>(users, users.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
    }

    // Create a new user
    @PostMapping("/fusers")
    public ResponseEntity<?> createUser(@RequestBody UserModel userModel) {
        try {
            userService.createUser(userModel);
            return new ResponseEntity<>(userModel, HttpStatus.CREATED);
        } catch (ConstraintViolationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        } catch (UserCollectionException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

    // Read a user by ID
    @GetMapping("/fusers/{id}")
    public ResponseEntity<?> getUserById(@PathVariable("id") String id) {
        Optional<UserModel> user = userRepository.findById(id);
        if (user.isPresent()) {
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    // Update a user by ID
    @PutMapping("/fusers/{id}")
    public ResponseEntity<?> updateUserById(@PathVariable("id") String id, @RequestBody UserModel userModel) {
        Optional<UserModel> user = userRepository.findById(id);
        if (user.isPresent()) {
            UserModel existingUser = user.get();
            existingUser.setUsername(userModel.getUsername());
            existingUser.setF_name(userModel.getF_name());
            existingUser.setL_name(userModel.getL_name());
            existingUser.setDescription(userModel.getDescription());
            existingUser.setEmail(userModel.getEmail());
            existingUser.setPhone(userModel.getPhone());
            existingUser.setAge(userModel.getAge());
            existingUser.setSocialMedia(userModel.getSocialMedia());
            existingUser.setCompleted(userModel.getCompleted());
            existingUser.setCreatedAt(userModel.getCreatedAt());
            existingUser.setUpdatedAt(new Date());
            UserModel savedUser = userRepository.save(existingUser);
            return new ResponseEntity<>(savedUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    // Delete a user by ID
    @DeleteMapping("/fusers/{id}")
    public ResponseEntity<?> deleteUserById(@PathVariable("id") String id) {
        Optional<UserModel> user = userRepository.findById(id);
        if (user.isPresent()) {
            userRepository.delete(user.get());
            return new ResponseEntity<>("User deleted", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/fusers/search")
    public ResponseEntity<?> searchUsersByUsername(@RequestParam("username") String username) {
        List<UserModel> users = userRepository.findByUsernameContainingIgnoreCase(username);
        if (!users.isEmpty()) {
            return new ResponseEntity<>(users, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("No users found", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/fusers/signin")
    public ResponseEntity<?> signIn(@RequestBody UserCredentials credentials) throws UserCollectionException {
        boolean token = userService.authenticateUser(credentials.getUsername(), credentials.getPassword());
        return ResponseEntity.ok(new SignInResponse(token));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticateUser(@RequestBody UserCredentials credentials) {
        try {
            boolean isValidUser = userService.authenticateUser(credentials.getUsername(), credentials.getPassword());
            if (isValidUser) {
                return new ResponseEntity<>("User authenticated", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);
            }
        } catch (UserCollectionException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping("/fusers/signup")
    public ResponseEntity<?> signUp(@RequestBody UserModel userModel) {
        try {
            userService.createUser(userModel);
            return new ResponseEntity<>("User signed up successfully", HttpStatus.CREATED);
        } catch (ConstraintViolationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNPROCESSABLE_ENTITY);
        } catch (UserCollectionException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

}
 