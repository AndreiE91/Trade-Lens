import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './user';
import jwt_decode, { jwtDecode } from 'jwt-decode';

import { JwtPayload } from 'jsonwebtoken';

interface ExtendedJwtPayload extends JwtPayload {
    sub: string;
    role?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiServerUrl = environment.apiBaseUrl;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // Method to authenticate user and obtain token
  public authenticate(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(`${this.apiServerUrl}/auth/authenticate`, body).pipe(
        tap(response => {
            // Store token in local storage
            localStorage.setItem('authToken', response.token);

            // Decode the token to get the user's details
            const decodedToken = jwtDecode<ExtendedJwtPayload>(response.token);

            // Create a new object that adheres to the User interface
            const user: User = {
                username: decodedToken.sub,
                role: decodedToken.role,
                id: 0,
                password: '',
                email: ''
            };

            // Update the current user
            this.currentUserSubject.next(user);
        })
    );
}

  public register(email: string, password: string, username: string): Observable<any> {
    const body = { email, password, username };
    return this.http.post<any>(`${this.apiServerUrl}/auth/register`, body).pipe(
      tap(response => {
        // Store token in local storage
        localStorage.setItem('authToken', response.token);
      })
    );
  }

  getCurrentUser() {
    const token = localStorage.getItem('authToken');
    if (!token) return null;
  
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    const decodedToken = JSON.parse(jsonPayload);
    
    // Create a new object that adheres to the User interface
    const user = {
      username: decodedToken.sub,
      role: decodedToken.role,
      id: 0,
      password: '',
      email: ''
    };
  
    return user;
  }

  // Method to get stored token
  public getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Method to clear token (e.g., on logout)
  public clearAuthToken(): void {
    localStorage.removeItem('authToken');
  }

  logout() {
    // remove the current user and token from local storage
    localStorage.removeItem('currentUser');
    localStorage.removeItem('authToken');
  }
}
