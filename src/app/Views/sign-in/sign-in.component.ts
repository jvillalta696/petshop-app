import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignIn } from 'src/app/Interfaces/signIn';
import { SignInService } from '../../Services/Database/signIn.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formulario: FormGroup;

  constructor(private signin: SignInService, private router:Router) { 
    this.formulario = new FormGroup({
      fullName: new FormControl(),
      dateBirth: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
    })
  }

  ngOnInit(): void {}

  async onSubmit(){
    console.log(this.formulario.value);
    const resp = await this.signin.addUser(this.formulario.value)
    .then(res=>{
      console.log(res)
      alert('Create Account Successfully'),
      this.router.navigate([''])
      
    })
    .catch(err=>{
      console.log(err);     
    })
  }

}
