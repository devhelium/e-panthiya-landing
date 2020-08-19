import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
  animations: [SharedAnimations]
})
export class ForgotComponent implements OnInit {

  forgotpass = {
    email: '',
    published: false
  };
  submitted = false;


  constructor(private apiServiceService: ApiServiceService ) { }

  ngOnInit() {

  }
  createforgotpass() {
    const forgotpass = {
      email: this.forgotpass.email,
      
    };
    this.apiServiceService.forgotpasscreate(forgotpass)
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
