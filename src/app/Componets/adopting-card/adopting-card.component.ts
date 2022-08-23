import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/Interfaces/user-profile';
import { PetService } from 'src/app/Services/Database/pet.service';
import { UserProfileService } from 'src/app/Services/Database/user-profile.service';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { IAdoptingCard } from './iadopting-card.metadata';


@Component({
  selector: 'app-adopting-card',
  templateUrl: './adopting-card.component.html',
  styleUrls: ['./adopting-card.component.css']
})
export class AdoptingCardComponent implements OnInit {
@Input() data: IAdoptingCard | undefined;
id?: string;
user?:UserProfile;
  constructor(
    private auth:UserAuthService,
    private currentUser:UserProfileService,
    private currentPet:PetService,
    ) { 
      this.id= auth.getCurrentUser()?.uid;
    }

  ngOnInit(): void {
    this.currentUser.getUserProfile(this.id).subscribe((user)=>{
      this.user = user
    })
  }

  adopter (){
    if(this.user?.listPetAdoptions === undefined){
      this.currentUser.updateUserProfile({listPetAdoptions: [this.data]},this.id).then(()=>{        
        this.currentPet.updatePets({status:false},this.data?.id).then(()=>{
          alert('Mascota adoptada con exito')
        })
      })
    }else{      
      this.user.listPetAdoptions.push(this.data)
      this.currentUser.updateUserProfile({listPetAdoptions: this.user.listPetAdoptions},this.id).then(()=>{        
        this.currentPet.updatePets({status:false},this.data?.id).then(()=>{
          alert('Mascota adoptada con exito')
        })
      })     
    }

    /*this.currentProduct.updateProducts({status:false},this.data?.id).then(()=>{
      console.log('Mascota Adoptada')
    })*/
  }

}
