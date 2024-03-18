package com.cryptotrading.tradelens.repository;

import com.cryptotrading.tradelens.entity.TradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradeRepository extends JpaRepository<TradeEntity, Long> {

}