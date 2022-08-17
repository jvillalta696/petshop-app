import { Component, Input, OnInit } from '@angular/core';
import { IAdoptingTitle } from './title-h1.metadata';

@Component({
  selector: 'app-adopting-title',
  templateUrl: './adopting-title.component.html',
  styleUrls: ['./adopting-title.component.css']
})
export class AdoptingTitleComponent implements OnInit {
@Input() type = '';
@Input() text = 'primary';
  constructor() { }

  ngOnInit(): void {
  }

}
