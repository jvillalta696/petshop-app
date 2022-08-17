import { Component, OnInit } from '@angular/core';
import { IAdoptingCard } from 'src/app/Componets/adopting-card/iadopting-card.metadata';

@Component({
  selector: 'app-pet-adopter',
  templateUrl: './pet-adopter.component.html',
  styleUrls: ['./pet-adopter.component.css']
})
export class PetAdopterComponent implements OnInit {

  public pets: IAdoptingCard = {
    avatar: "../../../assets/images/cat.png",
    name: "Oggy",
    link: "Adopt",
    nameTwo: "Oggy",
    description: "Here is some more information about this animal that is only revealed once clicked on"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
