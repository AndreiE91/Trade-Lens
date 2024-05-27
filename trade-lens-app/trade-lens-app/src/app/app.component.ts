import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  currentUser: User;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.currentUser = this.authService.getCurrentUser();
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

  navigateToUsers(): void {
    this.router.navigate(['/users']);
  }

  navigateToFindUserById(): void {
    this.router.navigate(['/find-user']);
  }

  navigateToAddUser(): void {
    this.router.navigate(['/add-user']);
  }

  navigateToUpdateUser(): void {
    this.router.navigate(['/update-user']);
  }

  navigateToDeleteUser(): void {
    this.router.navigate(['/delete-user']);
  }

  navigateToTrades(): void {
    this.router.navigate(['/trades']);
  }

  navigateToFindTradeById(): void {
    this.router.navigate(['/find-trade']);
  }

  navigateToAddTrade(): void {
    this.router.navigate(['/add-trade']);
  }

  navigateToUpdateTrade(): void {
    this.router.navigate(['/update-trade']);
  }

  navigateToDeleteTrade(): void {
    this.router.navigate(['/delete-trade']);
  }

  logout(): void {
    this.authService.logout();
    this.currentUser = null;
    this.router.navigate(['/login']);
  }
}