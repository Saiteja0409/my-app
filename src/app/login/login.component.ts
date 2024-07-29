import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(null , [Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])\S{8,}$/)])
  })

  constructor(private _loginService:LoginService , private _router:Router) { }

  ngOnInit(): void {
  }
  login(){
    // console.log(this.loginForm);
    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login successfull!!");
        // go to dashboard
        this._router.navigateByUrl("/dashboard");
        // store token
        sessionStorage.setItem("my-app-token", data.token);
      
      },
      (err:any)=>{
        alert("invalid credentials")
      }
    )

  }



}
