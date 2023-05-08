package com.example.foodie.exception;

public class UserCollectionException extends Exception{

        private static final long serialVersionUID = 1L;
    public UserCollectionException (String message) {
        super(message);
    }
        public static String NotFoundException(String id) {
        return "User with id " + id + " not found";
    }
        public static String UserAlreadyExistsException(String username) {
        return "User with username " + username + " already exists";
    }

        public static String userAlreadyExists() {
        return null;
    }

}
