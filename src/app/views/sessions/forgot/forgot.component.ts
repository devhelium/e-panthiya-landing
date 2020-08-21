import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { ApiServiceService } from '../../../services/api-service.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
  animations: [SharedAnimations]
})
export class ForgotComponent implements OnInit {
  
  error = {
    email : '',
  };
  success= false;
  successMsg = '';

  user = {
    email : ''
  };
  submitted : false;
  constructor( private apiService : ApiServiceService ) { }

  ngOnInit() {
  }

  resetUser(){

    const user = {
      email: this.user.email,
    };

    this.apiService.reset(user)
    .subscribe(
     (response: any) => {
        if(response.type === 'success'){
          this.success = true;
          this.successMsg = response.message;
          console.log(this.successMsg);
          this.user.email = '';
        }
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
  }


}
