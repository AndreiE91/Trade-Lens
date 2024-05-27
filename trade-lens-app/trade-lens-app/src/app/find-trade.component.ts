import { Component, OnInit } from '@angular/core';
import { TradeService } from './trade.service';
import { Trade } from './trade';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-find-trade',
  templateUrl: './find-trade.component.html',
  styleUrls: ['./find-trade.component.css']
})
export class FindTradeComponent implements OnInit {
  trade: any;
  message: string;

  constructor(private tradeService: TradeService) {}

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      tradeId: new FormControl(''),
    });
  }

  findTrade() {
    const tradeId = this.form.get('tradeId').value;
    this.tradeService.getTradeById(tradeId).subscribe(trade => {
      if (trade) {
        this.trade = trade;
        this.message = null;
      } else {
        this.trade = null;
        this.message = 'Could not find trade. Please try again.';
      }
    });
  }
}