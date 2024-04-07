package com.cryptotrading.tradelens.controller;

import com.cryptotrading.tradelens.entity.TradeEntity;
import com.cryptotrading.tradelens.service.TradeService;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/v1/trade")
public class TradeController {

    private final TradeService tradeService;

    public TradeController(TradeService tradeService) {
        this.tradeService = tradeService;
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping
    public List<TradeEntity> findAllTrades() {
        return tradeService.findAllTrades();
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @GetMapping(value = "/{id}")
    public Optional<TradeEntity> findTradeById(@PathVariable("id") Long id) {
        return tradeService.findById(id);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @PostMapping
    public TradeEntity saveTrade(@RequestBody TradeEntity tradeEntity) {
        return tradeService.saveTrade(tradeEntity);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @PutMapping
    public TradeEntity updateTrade(@RequestBody TradeEntity tradeEntity) {
        return tradeService.updateTrade(tradeEntity);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @DeleteMapping(value = "/{id}")
    public void deleteTrade(@PathVariable("id") Long id) {
        tradeService.deleteTrade(id);
    }
}
