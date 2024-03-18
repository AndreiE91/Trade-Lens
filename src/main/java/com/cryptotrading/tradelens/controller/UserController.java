package com.cryptotrading.tradelens.controller;

import com.cryptotrading.tradelens.entity.UserEntity;
import com.cryptotrading.tradelens.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<UserEntity> findAllUsers() {
        return userService.findAllUsers();
    }

    @GetMapping(value = "/{id}")
    public Optional<UserEntity> findUserById(@PathVariable("id") Long id) {
        return userService.findById(id);
    }

    @PostMapping
    public UserEntity saveUser(@RequestBody UserEntity userEntity) {
        return userService.saveUser(userEntity);
    }

    @PutMapping
    public UserEntity updateUser(@RequestBody UserEntity userEntity) {
        return userService.updateUser(userEntity);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
    }
}
