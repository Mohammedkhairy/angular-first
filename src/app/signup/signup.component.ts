import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { User } from '../user';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthenticationService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'email':[null , Validators.required],
      'firstName':[null , Validators.required],
      'lastName':[null , Validators.required],
      'password':[null , Validators.required]
    });
  }

  signup(formData: NgForm){
    //console.log(formData);
    return  this.auth.signup(formData)
    .subscribe(usr => localStorage.setItem('currentUser' , JSON.stringify(usr)));
  }

}
