import { Component, OnInit, Input } from '@angular/core';
import { IPetshopCard } from './ipetshop-card.metadata';

@Component({
  selector: 'app-petshop-card',
  templateUrl: './petshop-card.component.html',
  styleUrls: ['./petshop-card.component.css']
})
export class PetshopCardComponent implements OnInit {
  @Input() data: IPetshopCard | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
