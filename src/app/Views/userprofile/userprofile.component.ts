import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/Services/Database/user-profile.service';
import { UserAuthService } from '../../Services/user-auth.service';
import { UserProfile } from '../../Interfaces/user-profile';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {
  user?: UserProfile;
  id?: string;
  constructor(
    private auth: UserAuthService,
    private userProfile: UserProfileService
  ) {
    this.id = auth.getCurrentUser()?.uid;
  }

  ngOnInit(): void {}
  prueba() {
    this.userProfile.getUserProfile(this.id).subscribe((user)=>{
      this.user = user
    })
    console.log(this.user);
  }
}
