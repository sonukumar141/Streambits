import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from  '@angular/common';
 
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';

import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
    {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  	{path: 'signup', component: SignupComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
  LoginComponent,
  SignupComponent  
],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
  	AuthService,
  	AuthGuard
  ]

})
export class AuthModule { }
