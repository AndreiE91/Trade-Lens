import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.router.url === '/login') {
      return true; // Allow access to the login page
    }
    if (this.authService.getAuthToken()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
