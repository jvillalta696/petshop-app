import { Component, Input,OnInit } from '@angular/core';
import { UserProfile } from '../../Interfaces/user-profile';
@Component({
  selector: 'app-table-shop',
  templateUrl: './table-shop.component.html',
  styleUrls: ['./table-shop.component.css']
})
export class TableShopComponent implements OnInit {
  @Input() data?:UserProfile
  constructor() { }

  ngOnInit(): void {
  }

}
