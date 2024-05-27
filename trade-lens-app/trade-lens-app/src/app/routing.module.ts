import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { UsersComponent } from './users.component';
import { RegisterComponent } from './register.component';
import { HomeComponent } from './home.component';
import { InsufficientPermissionsComponent } from './insufficient-permissions.component';

import { FindUserComponent } from './find-user.component';
import { AddUserComponent } from './add-user.component';
import { UpdateUserComponent } from './update-user.component';
import { DeleteUserComponent } from './delete-user.component';
import { UserGuard } from './user.guard';
import { TradesComponent } from './trades.component';
import { FindTradeComponent } from './find-trade.component';
import { AddTradeComponent } from './add-trade.component';
import { UpdateTradeComponent } from './update-trade.component';
import { DeleteTradeComponent } from './delete-trade.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent, canActivate: [AdminGuard] },
  { path: 'home', component: HomeComponent},
  { path: 'insufficient-permissions', component: InsufficientPermissionsComponent },
  { path: 'find-user', component: FindUserComponent , canActivate: [UserGuard]},
  { path: 'add-user', component: AddUserComponent, canActivate: [AdminGuard]}, 
  { path: 'update-user', component: UpdateUserComponent , canActivate: [UserGuard]},
  { path: 'delete-user', component: DeleteUserComponent, canActivate: [AdminGuard]},
  { path: 'trades', component: TradesComponent , canActivate: [AdminGuard]},
  { path: 'find-trade', component: FindTradeComponent , canActivate: [UserGuard]},
  { path: 'add-trade', component: AddTradeComponent , canActivate: [UserGuard]},
  { path: 'update-trade', component: UpdateTradeComponent , canActivate: [UserGuard]},
  { path: 'delete-trade', component: DeleteTradeComponent , canActivate: [UserGuard]},
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }