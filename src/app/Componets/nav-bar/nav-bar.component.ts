import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../../Services/user-auth.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private userAuth:UserAuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  signout(){
    this.userAuth.signout()
    .then(()=>this.router.navigate(['login']))
    .catch(error=>console.log(error))
  }

}
