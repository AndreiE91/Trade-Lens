import { Injectable } from '@angular/core';
import { Trade } from './trade';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getAuthToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Attach the token to the header
    });
  }

  public getTrades(): Observable<Trade[]> {
    return this.http.get<Trade[]>(`${this.apiServerUrl}/trade`, { headers: this.getHeaders() });
  }

  public getTradeById(tradeId: number): Observable<Trade> {
    return this.http.get<Trade>(`${this.apiServerUrl}/trade/${tradeId}`, { headers: this.getHeaders() });
  }

  public addTrade(trade: Trade): Observable<Trade> {
    //console.log(this.getHeaders().get('Authorization'));
    console.log(trade);
    return this.http.post<Trade>(`${this.apiServerUrl}/trade`, trade, { headers: this.getHeaders() });
  }

  public updateTrade(trade: Trade): Observable<Trade> {
    console.log(this.getHeaders().get('Authorization'));
    console.log(trade);
    return this.http.put<Trade>(`${this.apiServerUrl}/trade`, trade, { headers: this.getHeaders() });
  }

  public deleteTrade(tradeId: number): Observable<void> {
    //console.log(this.getHeaders().get('Authorization'));
    return this.http.delete<void>(`${this.apiServerUrl}/trade/${tradeId}`, { headers: this.getHeaders() });
  }
}
