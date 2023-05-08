package com.example.foodie.service;

import java.util.List;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.foodie.model.Restaurant;
import com.example.foodie.repository.RestaurantRepository;

@Service
public class RestaurantService {
    @Autowired
    private RestaurantRepository restaurantRepository;

    // Create a new restaurant
    public Restaurant createRestaurant(Restaurant restaurant) {
        restaurant.setCreatedAt(new Date(System.currentTimeMillis()));
        return restaurantRepository.save(restaurant);
    }

    // Get all restaurants
    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAll();
    }

    // Get restaurant by id
    public Restaurant getRestaurantById(String id) {
        return restaurantRepository.findById(id).get();
    }

    // Update restaurant by id
    public Restaurant updateRestaurantById(String id, Restaurant restaurant) {
        Restaurant restaurantToUpdate = restaurantRepository.findById(id).get();
        restaurantToUpdate.setName(restaurant.getName());
        restaurantToUpdate.setType(restaurant.getType());
        restaurantToUpdate.setDescription(restaurant.getDescription());
        restaurantToUpdate.setImage(restaurant.getImage());
        restaurantToUpdate.setAddress(restaurant.getAddress());
        restaurantToUpdate.setMobile(restaurant.getMobile());
        restaurantToUpdate.setWebsite(restaurant.getWebsite());
        restaurantToUpdate.setMenu(restaurant.getMenu());
        restaurantToUpdate.setReviews(restaurant.getReviews());
        restaurantToUpdate.setBusinessHours(restaurant.getBusinessHours());
        return restaurantRepository.save(restaurantToUpdate);
    }

    // Delete restaurant by id
    public void deleteRestaurantById(String id) {
        restaurantRepository.deleteById(id);
    }
}
