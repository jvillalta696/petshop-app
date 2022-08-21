import { Component, OnInit } from '@angular/core';
import { IAdoptingCard } from 'src/app/Componets/adopting-card/iadopting-card.metadata';
import { Pet } from 'src/app/Interfaces/pet';
import { PetService } from '../../Services/Database/pet.service';

@Component({
  selector: 'app-pet-adopter',
  templateUrl: './pet-adopter.component.html',
  styleUrls: ['./pet-adopter.component.css'],
})
export class PetAdopterComponent implements OnInit {
  pets?: Pet[];
  /*public pets: IAdoptingCard = {
    avatar: "../../../assets/images/cat.png",
    name: "Oggy",
    link: "Adopt",
    nameTwo: "Oggy",
    description: "Here is some more information about this animal that is only revealed once clicked on"
  }*/

  constructor(private petService: PetService) {
    this.pets = [];
  }

  ngOnInit(): void {
    this.petService.getPets().subscribe((pets)=>{
      this.pets=pets;
    })   
  }
}
