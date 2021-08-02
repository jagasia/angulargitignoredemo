import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  constructor(private fb:FormBuilder, private us:UserService) { 
    this.loginForm=this.fb.group({
      id:[],
      password:[]
    });
  }

  ngOnInit(): void {
  }

  login()
  {
    var id=this.loginForm.controls['id'].value;
    var password=this.loginForm.controls['password'].value;
    console.log(id+" : "+password);
    this.us.login(id, password).subscribe((data)=>{
      console.log(data);
    });
  }
}
