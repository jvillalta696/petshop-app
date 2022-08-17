import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adopting-instructions',
  templateUrl: './adopting-instructions.component.html',
  styleUrls: ['./adopting-instructions.component.css']
})
export class AdoptingInstructionsComponent implements OnInit {
  @Input() type = '';
  @Input() text = 'any';
  
  constructor() { }

  ngOnInit(): void {
  }

}
