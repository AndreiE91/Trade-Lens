import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { email, password, username } = this.registerForm.value;
      this.authService.register(email, password, username).subscribe({
        next: () => {
          this.router.navigate(['/login']); // Redirect to login page on successful login
        },
        error: () => {
          this.errorMessage = 'Invalid register credentials. Please try again.';
        }
      });
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
    }
  }
}