import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../models/user'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userList: User[];
  private userAuth: Map<string, User>
  constructor(private router: Router) {
    this.userList = [{
      'userId': '1',
      'password': 'dummy',
      'name': 'Hitesh'
    }];
    this.userAuth = new Map();
    this.userAuth.set("1", this.userList[0]);
  }

  private authenticate(userId: string, password: string): boolean {
    var user: User = this.userAuth.get(userId);
    if (undefined === user) {
      return false;
    }
    return user.password === password;
  }

  public login(user: string, password: string): boolean {
    var authenticated: boolean = this.authenticate(user, password);
    if (authenticated) {
      window.sessionStorage.setItem("user", user);
      return true;
    } else {
      return false;
    }
  }
  public loginAndRedirect(user: string, password: string, redirectPage: string): boolean {
    if (this.login(user, password)) {
      this.router.navigate([redirectPage]);
      return true;
    } else {
      return false;
    }
  }

  public logout() {
    sessionStorage.removeItem('user');
  }
}
