import { Component, OnInit, Input } from '@angular/core';
import { UserProfile } from 'src/app/Interfaces/user-profile';
import { ProductService } from 'src/app/Services/Database/product.service';
import { UserProfileService } from 'src/app/Services/Database/user-profile.service';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { IPetshopCard } from './ipetshop-card.metadata';
import * as M from "materialize-css";

@Component({
  selector: 'app-petshop-card',
  templateUrl: './petshop-card.component.html',
  styleUrls: ['./petshop-card.component.css'],
})
export class PetshopCardComponent implements OnInit {
  @Input() data: IPetshopCard | undefined;
  id?: string;
  user?: UserProfile;
  constructor(
    private auth: UserAuthService,
    private currentUser: UserProfileService,
    private currentProduct: ProductService
  ) {
    this.id = auth.getCurrentUser()?.uid;
  }

  ngOnInit(): void {
    this.currentUser.getUserProfile(this.id).subscribe((user) => {
      this.user = user;
    });
  }

  buy() {
    if (this.user?.listPetItems === undefined) {
      this.currentUser
        .updateUserProfile({ listPetItems: [this.data] }, this.id)
        .then(() => {
          M.toast({html: 'Purchase successful!',classes: 'rounded'})
        });
    } else {
      this.user.listPetItems.push(this.data);
      this.currentUser
        .updateUserProfile(
          { listPetItems: this.user.listPetItems },
          this.id
        )
        .then(() => {
          M.toast({html: 'Purchase successful!',classes: 'rounded'})
        });
    }
  }
}
