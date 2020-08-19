import { Component, OnInit, ɵConsole } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { ApiServiceService } from './../../../services/api-service.service';
import { CustomvalidationService} from '../../../services/customvalidation.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [SharedAnimations]
})

export class SignupComponent implements OnInit {

  error = {
    first_name : '',
    last_name : '',
    email : '',
    role :'',
    password : '',
    confirm_password : '',
  };

  user = {
    first_name : '',
    last_name : '',
    email : '',
    role :'',
    password : '',
    confirm_password : '',
  };
  submitted = false;
  constructor(
    private apiService : ApiServiceService,
    private customValidator : CustomvalidationService 
    ) { }

  ngOnInit() {
  }
 
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
     (response: any) => {
      //  console.log(response.status);
       //this.submitted = true;
     },
     err => {

       if (err.status === 422){
          // this.error = err.error.message[0].msg; 
          err.error.message.forEach(element => {
            this.error[element.param] = element.msg;
          });

          console.log(this.error)
       }
       
      // this.error = err.error.message[0].msg; 
      // //  console.log('error response--------------------------------'+JSON.stringify(error));
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

   /* Text Change */
   onChange(){
      if(this.user.first_name){
      this.error.first_name = null;
      }
      if(this.user.last_name){
      this.error.last_name = null;
      }
      if(this.user.email){
      this.error.email = null;
      }
      if(this.user.role){
        this.error.role= null;
      }
      if(this.user.password){
        this.error.password= null;
      }
      if(this.user.confirm_password){
        this.error.confirm_password= null;
      }
   }
}
