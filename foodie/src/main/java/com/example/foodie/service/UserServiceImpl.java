package com.example.foodie.service;

import com.example.foodie.exception.UserCollectionException;
import com.example.foodie.model.UserModel;
import com.example.foodie.repository.UserRepository;

import jakarta.validation.ConstraintViolationException;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements userService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public void createUser(UserModel userModel) throws ConstraintViolationException, UserCollectionException {
        Optional<UserModel> userOptional = userRepository.findByUsername(userModel.getUsername());
        if (userOptional.isPresent()) {
            throw new UserCollectionException(UserCollectionException.userAlreadyExists());

        } else {
            userModel.setCreatedAt(new Date(System.currentTimeMillis()));
            userRepository.save(userModel);
        }
    }

    @Override
    public List<UserModel> getAllUsers() {
        List<UserModel> users = userRepository.findAll();
        if (users.size() > 0) {
            return users;
        } else {
            return new ArrayList<UserModel>();
        }
    }

    @Override
    public boolean authenticateUser(String username, String password) throws UserCollectionException {
        Optional<UserModel> user = userRepository.findByUsername(username);
        if (user.isPresent()) {
            String hashedPassword = user.get().getPassword();
            return BCrypt.checkpw(password, hashedPassword);
        } else {
            throw new UserCollectionException("Invalid username or password");
        }
    }

    // @Override
    // public UserModel getUserById(String id) throws UserCollectionException {
    // Optional<UserModel> userOptional = userRepository.findById(id);
    // if (!userOptional.isPresent()) {
    // throw new
    // UserCollectionException(UserCollectionException.NotFoundException(id));
    // } else {
    // return userOptional.get();
    // }

}
