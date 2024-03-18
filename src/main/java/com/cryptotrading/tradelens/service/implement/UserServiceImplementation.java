package com.cryptotrading.tradelens.service.implement;

import com.cryptotrading.tradelens.entity.UserEntity;
import com.cryptotrading.tradelens.repository.UserRepository;
import com.cryptotrading.tradelens.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService {

    private final UserRepository userRepository;

    public UserServiceImplementation(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<UserEntity> findAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<UserEntity> findById(Long id) {
        return Optional.ofNullable(userRepository.findById(id).orElse(null));
    }

    @Override
    public UserEntity saveUser(UserEntity user) {
        return userRepository.save(user);
    }

    @Override
    public UserEntity updateUser(UserEntity user) {
        Optional<UserEntity> existingUserOptional = userRepository.findById(user.getId());
        if (existingUserOptional.isPresent()) {
            UserEntity existingUser = existingUserOptional.get();
            if (user.getUsername() != null) {
                existingUser.setUsername(user.getUsername());
            }
            if (user.getEmail() != null) {
                existingUser.setEmail(user.getEmail());
            }
            if (user.getPassword() != null) {
                existingUser.setPassword(user.getPassword());
            }
            return userRepository.save(existingUser);
        } else {
            throw new IllegalArgumentException("User not found with id: " + user.getId());
        }
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
