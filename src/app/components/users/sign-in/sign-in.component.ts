import { Component, OnInit } from '@angular/core';
import { UserApi } from '../users';
import { UserService } from './../../../services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  submitting = false;
  formError: string;
  // const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  constructor(private userApi: UserApi, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(signInForm: NgForm): void {
    if (signInForm.valid) {
      this.submitting = true;
      this.formError = null;
      this.userApi.signIn(signInForm.value.email, signInForm.value.password).subscribe((data) => {
        console.log(signInForm.value.email, " - signInForm.value.email");
        console.log(signInForm.value.password, " - signInForm.value.password");
        console.log(data);
        console.log("signIn");
        this.router.navigate(['/authenticated']);
        console.log("signInEnd");
      })
    } else {
      (error) => {
        this.submitting = false;
        this.formError = error;
      }
    }
  }
}
