package com.example.foodie.controller;

public class SignInResponse {

    private boolean token;

    public SignInResponse(boolean token) {
        this.token = token;
    }

    public boolean isToken() {
        return token;
    }
}
