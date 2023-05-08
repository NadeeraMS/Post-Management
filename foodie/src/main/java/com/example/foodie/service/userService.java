package com.example.foodie.service;

import com.example.foodie.model.UserModel;
import jakarta.validation.ConstraintViolationException;
import com.example.foodie.exception.UserCollectionException;

import java.util.List;

public interface userService {

    public void createUser(UserModel user) throws ConstraintViolationException, UserCollectionException;

    public List<UserModel> getAllUsers();

    public boolean authenticateUser(String username, String password) throws UserCollectionException;
}

//
// public UserModel getUserById(String id) throws UserCollectionException;
