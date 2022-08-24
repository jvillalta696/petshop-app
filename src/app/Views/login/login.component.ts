import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuth } from 'src/app/Interfaces/user-auth';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: UserAuth;

  constructor(private userAuth: UserAuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      psw: new FormControl(''),
    });
    this.user = { email: '', psw: '' };
  }

  ngOnInit(): void {}

  signin() {
    this.user = this.loginForm.value;
    this.userAuth
      .signin(this.user)
      .then((res) => {
        this.router.navigate(['']);
      })
      .catch((err) => {
        M.toast({html: err.toString(),classes: 'rounded red darken-1'})
        console.log(err)
      });
  }

  signup() {
    this.router.navigate(['signin']);
  }
}
