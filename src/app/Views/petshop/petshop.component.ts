import { Component, OnInit } from '@angular/core';
import{ ProductService}from '../../Services/Database/product.service'
@Component({
  selector: 'app-petshop',
  templateUrl: './petshop.component.html',
  styleUrls: ['./petshop.component.css']
})
export class PetshopComponent implements OnInit {
  products?: any[];
  constructor(private productService: ProductService) { 
    this.products = [];
  }
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
    console.log(this.products)
  }

}
