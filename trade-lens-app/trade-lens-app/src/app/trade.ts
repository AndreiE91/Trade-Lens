export interface Trade {
    id: number;
    user_id: number;
    symbol: string;
    entry_price: number;
    close_price: number;
    sl_price: number;
    risk_percentage: number;
    date_closed: string;
}