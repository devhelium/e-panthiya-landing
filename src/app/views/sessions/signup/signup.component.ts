import { ApiServiceService } from './../../../serivce/api-service.service';
import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [SharedAnimations]
})
export class SignupComponent implements OnInit {

  user = {
    first_name : '',
    last_name : '',
    email : '',
    role :'',
    password : '',
    confirm_password : '',
  };
  submitted = false;
  constructor(private apiService : ApiServiceService) { }

  ngOnInit() {
  }

  errMsg = [];
  saveUser() {

    const user = {
      first_name : this.user.first_name,
      last_name : this.user.last_name,
      email : this.user.email,
      role : this.user.role,
      password :this.user.password,
      confirm_password : this.user.confirm_password
    };
    this.apiService.create(user)
    .subscribe(
     response => {
       console.log(response);
       //this.submitted = true;
     },
     error => {
       console.log('error response--------------------------------'+JSON.stringify(error));
       this.errMsg = error
     });
  }

  newUser(){
     this.submitted = false;
     this.user = {
       first_name : '',
       last_name : '',
       email: '',
       role: '',
       password:'',
       confirm_password : '',
     };
   }

}
