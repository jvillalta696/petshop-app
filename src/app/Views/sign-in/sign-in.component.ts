import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignIn } from 'src/app/Interfaces/signIn';
import { SignInService } from '../../Services/Database/signIn.service';
import { Router } from '@angular/router';
import { UserAuth } from 'src/app/Interfaces/user-auth';
import {UserAuthService} from '../../Services/user-auth.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formulario: FormGroup;
  user:UserAuth;
  uProfile:SignIn;
  constructor(
    private signin: SignInService, 
    private userAuth: UserAuthService,
    private router:Router) { 
    this.formulario = new FormGroup({
      fullName: new FormControl(),
      dateBirth: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
    })
    this.user = {email:'',psw:''}
    this.uProfile ={      
    }
  }

  ngOnInit(): void {
    const options ={
      yearRange:50
    }
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems, options);
    });
  }

  
  
  async onSubmit(){
    try {
      this.uProfile = this.formulario.value;
    this.user.email = this.uProfile.email;
    this.user.psw = this.uProfile.password;
    const res = await this.userAuth.signup(this.user);
    this.uProfile.id = res.user.uid;
    const resp = await this.signin.addUser(this.uProfile, res.user.uid);
    console.log(resp)
    alert('Create Account Successfully');
    this.router.navigate(['']);
    } catch (err:any) {
      M.toast({html: err.toString(),classes: 'rounded red darken-1'})
      console.log(err)
    }
    
  }  
  
  

}
