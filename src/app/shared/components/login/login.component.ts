import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  inValidate: boolean = false;
  ngOnInit(): void {
  }
  login() {


  }
  loginAndRedirectBack(user: string, password: string) {
    var redirect: string = window.sessionStorage.getItem('redirect');
    if (null === redirect) {
      redirect = "#";
    }
    if(this.loginService.loginAndRedirect(user, password, redirect)){
      
    }
  }
}
