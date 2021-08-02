import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:any;
  constructor(private fb:FormBuilder, private us: UserService) {
    this.signupForm=this.fb.group({
      id:[],
      password:[],
      confirmPassword:[],
      firstName:[],
      lastName:[],
      role:[]
    });
   }

  ngOnInit(): void {
  }

  signup()
  {
    console.log(this.signupForm.value);
    this.us.signup(this.signupForm.value).subscribe((data)=>console.log(data));
  }

}
