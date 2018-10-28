import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';

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
    RouterModule.forChild(routes)
  ],
  providers: []

})
export class AuthModule { }
