import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = 'https://damp-meadow-37696.herokuapp.com/';
  headers = new HttpHeaders ().set('Content-Type', 'application/json');
  currentUser = {};
  window: any;
  router: any;

  constructor(private http: HttpClient) { }
  
  // Register User
  create(user){
    return this.http.post(this.baseUrl + 'registration_action', user);
  }

  //Login User
  login(user){
    return this.http.post(this.baseUrl + 'login_action', user)
    .subscribe((res: any) => {
        if(res.message.accessToken && res.message.role == "student" || res.message.role == "parent"){
          var payload = "access_token=" + res.message.accessToken + "&refresh_token=" + res.message.refreshToken;
          window.location.href = 'http://localhost:4200/pages/papers/auth?' + payload;

        }else{
          window.location.href = 'http://localhost:4600/#/sessions/signin';
        }
      }
  );
  }

  // Reset Password
  reset(user){
    return this.http.post(this.baseUrl + 'forgot_action', user);
  }
}
