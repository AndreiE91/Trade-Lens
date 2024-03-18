package com.cryptotrading.tradelens.service;

import com.cryptotrading.tradelens.entity.UserEntity;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<UserEntity> findAllUsers();
    Optional<UserEntity> findById(Long id);
    UserEntity saveUser(UserEntity user);
    UserEntity updateUser(UserEntity user);
    void deleteUser(Long id);
}
