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
  error : any;
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
       console.log(response.status);
       //this.submitted = true;
     },
     err => {
       console.log(err.status)
       if (err.status === 422){
        this.error = err.error.message[0].msg;
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
}
