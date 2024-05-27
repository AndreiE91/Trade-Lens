import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const currentUser = this.authService.getCurrentUser();
    if ((currentUser && currentUser.role === 'USER') || (currentUser && currentUser.role === 'ADMIN')) {
      return true;
    } else {
      this.router.navigate(['/insufficient-permissions']);
      return false;
    }
  }
}