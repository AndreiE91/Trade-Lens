package com.cryptotrading.tradelens.service.implement;

import com.cryptotrading.tradelens.entity.TradeEntity;
import com.cryptotrading.tradelens.repository.TradeRepository;
import com.cryptotrading.tradelens.service.TradeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TradeServiceImplementation implements TradeService{

    private final TradeRepository tradeRepository;

    public TradeServiceImplementation(TradeRepository tradeRepository) {
        this.tradeRepository = tradeRepository;
    }

    @Override
    public List<TradeEntity> findAllTrades() {
        return tradeRepository.findAll();
    }

    @Override
    public Optional<TradeEntity> findById(Long id) {
        return tradeRepository.findById(id);
    }

    @Override
    public TradeEntity saveTrade(TradeEntity trade) {
        return tradeRepository.save(trade);
    }

    @Override
    public TradeEntity updateTrade(TradeEntity trade) {
Optional<TradeEntity> existingTradeOptional = tradeRepository.findById(trade.getId());
        if (existingTradeOptional.isPresent()) {
            TradeEntity existingTrade = existingTradeOptional.get();
            if (trade.getSymbol() != null) {
                existingTrade.setSymbol(trade.getSymbol());
            }
            if (trade.getEntry_price() != null) {
                existingTrade.setEntry_price(trade.getEntry_price());
            }
            if (trade.getClose_price() != null) {
                existingTrade.setClose_price(trade.getClose_price());
            }
            if (trade.getDate_closed() != null) {
                existingTrade.setDate_closed(trade.getDate_closed());
            }
            if (trade.getRisk_percentage() != null) {
                existingTrade.setRisk_percentage(trade.getRisk_percentage());
            }
            if (trade.getUser_id() != null) {
                existingTrade.setUser_id(trade.getUser_id());
            }
            return tradeRepository.save(existingTrade);
        } else {
            throw new IllegalArgumentException("Trade not found with id: " + trade.getId());
        }
    }

    @Override
    public void deleteTrade(Long id) {
        tradeRepository.deleteById(id);
    }
}
