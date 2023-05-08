package com.example.foodie.config;

import org.springframework.context.annotation.Bean;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.mapping.event.ValidatingMongoEventListener;

@Configuration
public class ValidationConfig {
    public ValidationConfig(){
        super();
    }

    @Bean
    public ValidatingMongoEventListener validatingEventListner() {
        return new ValidatingMongoEventListener (validater());
    }


    @Bean
    public LocalValidatorFactoryBean validater() {
        return new LocalValidatorFactoryBean();
    }
}
