import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'streambits-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formData: any = {};
  errors: any[] = [];

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  register(){
  	this.auth.signup(this.formData).subscribe(
  	()=> {
  		this.router.navigate(['/login', {registered: 'success'}]);
  	}, 
  	(errorResponse)=>{
  		this.errors = errorResponse.error.errors;
  	})
  }
}
