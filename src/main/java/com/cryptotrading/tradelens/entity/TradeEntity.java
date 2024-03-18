package com.cryptotrading.tradelens.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "trades")
public class TradeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "trade_id")
    private Long id;

    @Column(name = "user_id")
    private Long user_id;

    @Column(name = "symbol")
    private String symbol;

    @Column(name = "entry_price")
    private Double entry_price;

    @Column(name = "close_price")
    private Double close_price;

    @Column(name = "sl_price")
    private Double sl_price;

    @Column(name = "risk_percentage")
    private Double risk_percentage;

    @Column(name = "date_closed")
    private String date_closed;


    public TradeEntity(Long id, Long user_id, String symbol, Double entry_price, Double close_price, Double sl_price, Double risk_percentage, String date_closed) {
        this.id = id;
        this.user_id = user_id;
        this.symbol = symbol;
        this.entry_price = entry_price;
        this.close_price = close_price;
        this.sl_price = sl_price;
        this.risk_percentage = risk_percentage;
        this.date_closed = date_closed;
    }

    public TradeEntity() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public Double getEntry_price() {
        return entry_price;
    }

    public void setEntry_price(Double entry_price) {
        this.entry_price = entry_price;
    }

    public Double getClose_price() {
        return close_price;
    }

    public void setClose_price(Double close_price) {
        this.close_price = close_price;
    }

    public Double getSl_price() {
        return sl_price;
    }

    public void setSl_price(Double sl_price) {
        this.sl_price = sl_price;
    }

    public Double getRisk_percentage() {
        return risk_percentage;
    }

    public void setRisk_percentage(Double risk_percentage) {
        this.risk_percentage = risk_percentage;
    }

    public String getDate_closed() {
        return date_closed;
    }

    public void setDate_closed(String date_closed) {
        this.date_closed = date_closed;
    }
}
