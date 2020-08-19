import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = 'https://damp-meadow-37696.herokuapp.com/';
 

 // tslint:disable-next-line: no-trailing-whitespace
 

  constructor(private http: HttpClient) { }
  create(user) {
    return this.http.post(this.baseUrl + 'registration_action', user);
  }


}
