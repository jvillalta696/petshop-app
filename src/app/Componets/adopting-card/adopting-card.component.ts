import { Component, Input, OnInit } from '@angular/core';
import { IAdoptingCard } from './iadopting-card.metadata';

@Component({
  selector: 'app-adopting-card',
  templateUrl: './adopting-card.component.html',
  styleUrls: ['./adopting-card.component.css']
})
export class AdoptingCardComponent implements OnInit {
@Input() data: IAdoptingCard | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
