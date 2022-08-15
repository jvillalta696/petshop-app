import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../../Services/user-auth.service'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
correo?:any;
  constructor(private userAuth:UserAuthService) { 
    this.correo = userAuth.getCurrentUser()?.email
  }

  ngOnInit(): void {
  }
  
}
