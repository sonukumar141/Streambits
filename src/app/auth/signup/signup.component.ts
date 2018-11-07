import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'streambits-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formData: any = {};

  constructor(private auth: AuthService ) { }

  ngOnInit() {
  }

  register(){
  	this.auth.signup(this.formData).subscribe(
  	()=> {
  		console.log('Success');
  	}, 
  	(errorResponse)=>{
  		console.log('errorResponse');
  	})
  }
}
