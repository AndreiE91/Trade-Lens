import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getAuthToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Attach the token to the header
    });
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user`, { headers: this.getHeaders() });
  }

  public getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/user/${userId}`, { headers: this.getHeaders() });
  }

  public addUser(user: User): Observable<User> {
    //console.log(this.getHeaders().get('Authorization'));
    console.log(user);
    return this.http.post<User>(`${this.apiServerUrl}/user`, user, { headers: this.getHeaders() });
  }

  public updateUser(user: User): Observable<User> {
    console.log(this.getHeaders().get('Authorization'));
    console.log(user);
    return this.http.put<User>(`${this.apiServerUrl}/user`, user, { headers: this.getHeaders() });
  }

  public deleteUser(userId: number): Observable<void> {
    //console.log(this.getHeaders().get('Authorization'));
    return this.http.delete<void>(`${this.apiServerUrl}/user/${userId}`, { headers: this.getHeaders() });
  }
}
