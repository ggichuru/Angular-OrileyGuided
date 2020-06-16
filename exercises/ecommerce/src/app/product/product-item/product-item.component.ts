import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

 public product: Product;



  constructor() { }

  ngOnInit() {

    this.product = {
      name: 'Lotion',
      price: 234,
       // tslint:disable-next-line:max-line-length
      image: 'https://pixabay.com/get/57e4d1414a51a814f6d1867dda35367b1c3ddde75657784b_1920.jpg',
      onsale: true,
      quantityInCart: 0
    };
    this.product = {
      name: 'Food',
      price: 2345,
       // tslint:disable-next-line:max-line-length
      image: 'https://pixabay.com/get/57e4d1414a51a814f6d1867dda35367b1c3ddde75657784b_1920.jpg',
      onsale: true,
      quantityInCart: 0
    };
  }

  increamentCart() {
    this.product.quantityInCart++;
  }
  decreamentCart() {
    if (this.product.quantityInCart > 0) {
      this.product.quantityInCart--;
    }
  }


}
