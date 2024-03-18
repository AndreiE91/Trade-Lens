package com.cryptotrading.tradelens.controller;

import com.cryptotrading.tradelens.entity.TradeEntity;
import com.cryptotrading.tradelens.service.TradeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/trade")
public class TradeController {

    private final TradeService tradeService;

    public TradeController(TradeService tradeService) {
        this.tradeService = tradeService;
    }

    @GetMapping
    public List<TradeEntity> findAllTrades() {
        return tradeService.findAllTrades();
    }

    @GetMapping(value = "/{id}")
    public Optional<TradeEntity> findTradeById(@PathVariable("id") Long id) {
        return tradeService.findById(id);
    }

    @PostMapping
    public TradeEntity saveTrade(@RequestBody TradeEntity tradeEntity) {
        return tradeService.saveTrade(tradeEntity);
    }

    @PutMapping
    public TradeEntity updateTrade(@RequestBody TradeEntity tradeEntity) {
        return tradeService.updateTrade(tradeEntity);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteTrade(@PathVariable("id") Long id) {
        tradeService.deleteTrade(id);
    }
}
