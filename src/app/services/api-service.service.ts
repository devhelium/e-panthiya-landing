import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = 'https://damp-meadow-37696.herokuapp.com/';

  constructor(private http: HttpClient) { }
  
  create(user){
    return this.http.post(this.baseUrl + 'registration_action', user);
  }
  login(user){
    return this.http.post(this.baseUrl + 'login_action', user);
  }
  reset(user){
    return this.http.post(this.baseUrl + 'forgot_action', user);
  }
}
