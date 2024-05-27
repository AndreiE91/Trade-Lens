import { Component, OnInit} from '@angular/core';
import { Trade } from './trade';
import { TradeService } from './trade.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {
  public trades: Trade[];

  constructor(private tradeService: TradeService) {}

  ngOnInit() {
    this.getTrades();
  }

  public getTrades(): void {
    this.tradeService.getTrades().subscribe(
      (response: Trade[]) => {
        console.log(response);
        this.trades = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



}
