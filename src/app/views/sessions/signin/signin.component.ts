import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [SharedAnimations]
})
export class SigninComponent implements OnInit {

  login = {
    email: '',
    password: '',
    published: false
  };
  submitted = false;


  constructor(private apiServiceService: ApiServiceService ) { }

  ngOnInit() {

  }
  createLogin() {
    const login = {
      email: this.login.email,
      password: this.login.password
    };
    this.apiServiceService.logincreate(login)
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
