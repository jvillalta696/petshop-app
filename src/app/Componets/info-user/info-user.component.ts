import { Component, Input,OnInit } from '@angular/core';
import { UserProfile } from '../../Interfaces/user-profile';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {
  @Input() data:UserProfile;
  constructor() { 
    this.data={}
  }
  
  ngOnInit(): void {

  }

}
