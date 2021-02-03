import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';
import {UserService} from './user.service';
import {ConfigService} from './config.service';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { CURRENT_USER, StateStorageService, TOKEN, TOKEN_PAYLOAD } from './state-storage.service';
import jwt_decode from "jwt-decode";

export interface UserTokenState {
  accessToken: string;
  expiresIn: number;
}


export interface TokenPayload {
  iss: string;
  sub: string;
  aud: string;
  iat: number;
  exp: number;
  pharmacyId?: number;
  firstTimeLogin?: boolean;
}


@Injectable()
export class AuthService {

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private config: ConfigService,
    private router: Router,
    private stateStorageService: StateStorageService,
  ) {
  }

  login(user) {
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    // const body = `username=${user.username}&password=${user.password}`;
    const body = {
      'username' : user.username,
      'password' : user.password
    };
    return this.apiService.postTyped<UserTokenState>(this.config.login_url, JSON.stringify(body), loginHeaders)
      .pipe(map((res) => {
        console.log('Login success');
        const tokenPayload = jwt_decode<TokenPayload>(res.accessToken);
        this.stateStorageService.store(TOKEN, res.accessToken);
        this.stateStorageService.store(TOKEN_PAYLOAD, tokenPayload);
        this.userService.getMyInfo().toPromise().then(myInfo => {
          this.stateStorageService.store(CURRENT_USER, myInfo);

        });
      }));
  }

  signup(user) {
    const signupHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.config.signup_url, JSON.stringify(user), signupHeaders)
      .pipe(map(() => {
        console.log('Sign up success');
      }));
  }

  logout() {
      this.userService.currentUser = null;
      this.router.navigate(['/login']);
  }

  changePassowrd(passwordChanger) {
    const passwordChangerHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.config.change_password_url, JSON.stringify(passwordChanger), passwordChangerHeaders)
    .pipe(map(() => {
      console.log('Password changer success');
    }));
  }

  tokenIsPresent() {
    return this.stateStorageService.retrieve(TOKEN) !== null;
  }

  getToken() {
    return this.stateStorageService.retrieve(TOKEN);
  }

}
