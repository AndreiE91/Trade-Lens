import { Component, OnInit } from '@angular/core';
import { TradeService } from './trade.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-delete-trade',
  templateUrl: './delete-trade.component.html',
  styleUrls: ['./delete-trade.component.css']
})
export class DeleteTradeComponent implements OnInit {
  id: number;

  constructor(private tradeService: TradeService) {}

  form: FormGroup;
  message: string;

  ngOnInit() {
    this.form = new FormGroup({
      tradeId: new FormControl(''),
    });
  }

  deleteTrade() {
    const tradeId = this.form.get('tradeId').value;
    this.tradeService.deleteTrade(tradeId).subscribe(
      response => {
        console.log(response);
        this.message = 'Successfully deleted trade';
      },
      error => {
        this.message = 'Error: Trade not found';
      }
    );
  }
}