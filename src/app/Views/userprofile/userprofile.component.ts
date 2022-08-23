import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/Services/Database/user-profile.service';
import { UserAuthService } from '../../Services/user-auth.service';
import { UserProfile } from '../../Interfaces/user-profile';
import { Pet } from 'src/app/Interfaces/pet';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {
  user: UserProfile;
  id?: string;
  pets?:Pet[]
  constructor(
    private auth: UserAuthService,
    private userProfile: UserProfileService
  ) {
    this.id = auth.getCurrentUser()?.uid;
    this.user = {}
    this.pets=[]
  }

  ngOnInit(): void {
    this.userProfile.getUserProfile(this.id).subscribe((user)=>{
      this.user = user
    })
    console.log(this.user.listPetAdoptions)
  }
  prueba() {
    this.userProfile.getUserProfile(this.id).subscribe((user)=>{
      this.user = user
      console.log(this.user.listPetAdoptions)
    })
  
  }
}
