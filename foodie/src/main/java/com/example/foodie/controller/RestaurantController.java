package com.example.foodie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.example.foodie.model.Restaurant;
import com.example.foodie.service.RestaurantService;

@RestController
@CrossOrigin("*")
@RequestMapping("/restaurants")
public class RestaurantController {
    @Autowired
    private RestaurantService restaurantService;

    // Create a new restaurant
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    private Restaurant createRestaurant(@RequestBody Restaurant restaurant) {
        return restaurantService.createRestaurant(restaurant);
    }

    // Get all restaurants
    @GetMapping
    private List<Restaurant> getAllRestaurants() {
        return restaurantService.getAllRestaurants();
    }

    // Get restaurant by id
    @GetMapping("/{id}")
    private Restaurant getRestaurantById(@PathVariable String id) {
        return restaurantService.getRestaurantById(id);
    }

    // Update restaurant by id
    @PatchMapping("/{id}")
    private Restaurant updateRestaurantById(@PathVariable String id, @RequestBody Restaurant restaurant) {
        return restaurantService.updateRestaurantById(id, restaurant);
    }

    // Delete restaurant by id
    @DeleteMapping("/{id}")
    private void deleteRestaurantById(@PathVariable String id) {
        restaurantService.deleteRestaurantById(id);
    }
}
