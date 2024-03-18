package com.cryptotrading.tradelens.service;

import com.cryptotrading.tradelens.entity.TradeEntity;

import java.util.List;
import java.util.Optional;

public interface TradeService {
    List<TradeEntity> findAllTrades();
    Optional<TradeEntity> findById(Long id);
    TradeEntity saveTrade(TradeEntity trade);
    TradeEntity updateTrade(TradeEntity trade);
    void deleteTrade(Long id);
}
