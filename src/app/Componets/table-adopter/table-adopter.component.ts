import { Component, Input,OnInit } from '@angular/core';
import { UserProfile } from '../../Interfaces/user-profile';
import {Pet}from '../../Interfaces/pet';

@Component({
  selector: 'app-table-adopter',
  templateUrl: './table-adopter.component.html',
  styleUrls: ['./table-adopter.component.css']
})
export class TableAdopterComponent implements OnInit {
@Input() data?:UserProfile
  constructor() { 
  }

  ngOnInit(): void {
  
  }

}
