import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import {ApiServiceService} from 'src/app/api-service.service';

import { from } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [SharedAnimations]
})
export class SignupComponent implements OnInit {

  user = {
    first_name: '',
    last_name: '',
    email: '',
    role: '',
    password: '',
    confirm_password: '',
    published: false
  };
  submitted = false;


  constructor(private apiServiceService: ApiServiceService ) { }

  ngOnInit() {

  }
  createUser() {
    const user = {
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      email: this.user.email,
      role: this.user.role,
      password: this.user.password,
      confirm_password: this.user.confirm_password,
    };
    this.apiServiceService.create(user)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

}
