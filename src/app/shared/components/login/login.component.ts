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
  login(user: string, password: string): boolean {
    return this.loginService.login(user, password);

  }
  loginAndRedirectBack(user: string, password: string) {
    var redirect: string = window.sessionStorage.getItem('redirect');
    if (null === redirect) {
      redirect = "#";

    }
    if (!this.loginService.loginAndRedirect(user, password, redirect)) {
      this.inValidate = true;
    }
  }
}
