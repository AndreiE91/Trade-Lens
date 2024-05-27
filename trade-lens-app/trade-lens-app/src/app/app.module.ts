import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UsersComponent } from './users.component';

import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FindUserComponent } from './find-user.component';
import { AddUserComponent } from './add-user.component';
import { UpdateUserComponent } from './update-user.component';
import { DeleteUserComponent } from './delete-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    RegisterComponent,
    FindUserComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
