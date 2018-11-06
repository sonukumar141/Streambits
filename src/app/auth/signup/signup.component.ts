import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'streambits-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formData: any = {};

  constructor() { }

  ngOnInit() {
  }

  register(){
  	console.log(this.formData);
  }
}
