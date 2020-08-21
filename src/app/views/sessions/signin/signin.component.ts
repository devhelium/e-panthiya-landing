import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { ApiServiceService } from './../../../services/api-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [SharedAnimations]
})
export class SigninComponent implements OnInit {

  error = {
    email : '',
    password : '',
  };

  user = {
    email : '',
    password:''
  };
  submitted = false;

  constructor( private apiService : ApiServiceService ) { }

  ngOnInit() {
  }
   loginUser(){

    const user = {
      email: this.user.email,
      password:this.user.password
    };

    this.apiService.login(user)
    .subscribe(
     (response: any) => {

    },
    err => {

       if (err.status === 422){
          // this.error = err.error.message[0].msg; 
          err.error.message.forEach(element => {
            this.error[element.param] = element.msg;
          });

          console.log(this.error)
       }
     });
   }
  /*Text Change */
  onChange(){
    if(this.user.email){
    this.error.email = null;
    }
    if(this.user.password){
    this.error.password = null;
    }
  }
}
