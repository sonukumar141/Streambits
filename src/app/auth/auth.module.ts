import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from  '@angular/common';
 
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';

import { AuthService } from './shared/auth.service';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
  	{path: 'signup', component: SignupComponent}
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
  	AuthService
  ]

})
export class AuthModule { }
