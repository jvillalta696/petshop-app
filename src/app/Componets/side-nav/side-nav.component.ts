import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../../Services/user-auth.service'
import { Router } from '@angular/router';
import * as M from "materialize-css";
import { UserProfile } from '../../Interfaces/user-profile';
import { UserProfileService } from 'src/app/Services/Database/user-profile.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
correo?:any;
user?:UserProfile;
id?:string;
  constructor(
    private userAuth:UserAuthService,
    private router: Router,
    private userProfileService:UserProfileService) { 
    this.correo = userAuth.getCurrentUser()?.email;
    this.id= userAuth.getCurrentUser()?.uid;
  }

  ngOnInit(): void {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    this.userProfileService.getUserProfile(this.id).subscribe((user)=>{
      this.user = user
    })
  }
  signout(){
    this.userAuth.signout()
    .then(()=>this.router.navigate(['login']))
    .catch(error=>console.log(error))
  }

}
