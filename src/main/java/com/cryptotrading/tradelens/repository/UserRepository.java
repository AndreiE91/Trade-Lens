package com.cryptotrading.tradelens.repository;

import com.cryptotrading.tradelens.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

}
