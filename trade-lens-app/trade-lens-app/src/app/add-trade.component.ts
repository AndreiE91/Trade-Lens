import { Component, OnInit } from '@angular/core';
import { TradeService } from './trade.service';
import { Trade } from './trade';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-trade',
  templateUrl: './add-trade.component.html',
  styleUrls: ['./add-trade.component.css']
})
export class AddTradeComponent implements OnInit {
  trade: Trade = { id: 0, user_id: 0, symbol: '', entry_price: 0, close_price: 0, sl_price: 0, risk_percentage: 0, date_closed: ''};
  message: string;

  constructor(private tradeService: TradeService, private formBuilder: FormBuilder) {}
  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
        user_id: ['', Validators.required],
        symbol: ['', Validators.required],
        entry_price: ['', Validators.required],
        close_price: ['', Validators.required],
        sl_price: ['', Validators.required],
        risk_percentage: ['', Validators.required],
        date_closed: ['', Validators.required]
      });
  }

  addTrade() {
    this.trade = this.form.value;
    this.tradeService.addTrade(this.trade).subscribe(
      trade => {
        console.log(trade);
        this.message = 'Trade added successfully';
      },
      error => {
        console.error(error);
        this.message = 'Failed to add trade. Please try again.';
      }
    );
  }
}