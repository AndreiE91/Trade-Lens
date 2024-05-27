import { Component, OnInit } from '@angular/core';
import { TradeService } from './trade.service';
import { Trade } from './trade';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-trade',
  templateUrl: './update-trade.component.html',
  styleUrls: ['./update-trade.component.css']
})
export class UpdateTradeComponent implements OnInit {
  trade: Trade = { id: 0, user_id: 0, symbol: '', entry_price: 0, close_price: 0, sl_price: 0, risk_percentage: 0, date_closed: '' };
 message: any;

  constructor(private tradeService: TradeService) {}

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
        tradeId: new FormControl(''),
        userId: new FormControl(''),
        newSymbol: new FormControl(''),
        newEntryPrice: new FormControl(''),
        newClosePrice: new FormControl(''),
        newSlPrice: new FormControl(''),
        newRiskPercentage: new FormControl(''),
        newDateClosed: new FormControl('')
    });
  }

  updateTrade() {
    this.trade = {
        id: this.form.get('tradeId').value,
        user_id: this.form.get('userId').value,
        symbol: this.form.get('newSymbol').value,
        entry_price: this.form.get('newEntryPrice').value,
        close_price: this.form.get('newClosePrice').value,
        sl_price: this.form.get('newSlPrice').value,
        risk_percentage: this.form.get('newRiskPercentage').value,
        date_closed: this.form.get('newDateClosed').value
    };
  
    this.tradeService.updateTrade(this.trade).subscribe(trade => console.log(trade));
  }

}