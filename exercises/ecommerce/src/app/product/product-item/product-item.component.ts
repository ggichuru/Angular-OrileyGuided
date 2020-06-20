import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

 // public product: Product;
  public products;
  public prodClass;
  public dropdownvalue;
  public quantities: Array<number>;


  constructor() { }

  ngOnInit() {
    //
    // this.product = {
    //   name: 'Lotion',
    //   price: 234,
    //    // tslint:disable-next-line:max-line-length
    //   image: 'https://pixabay.com/get/57e4d1414a51a814f6d1867dda35367b1c3ddde75657784b_1920.jpg',
    //   onsale: true,
    //   quantityInCart: 0
    // };
    this.products = {
      name: 'Food',
      price: 2345,
       // tslint:disable-next-line:max-line-length
      image: 'https://pixabay.com/get/57e4d1414a51a814f6d1867dda35367b1c3ddde75657784b_1920.jpg',
      onsale: true,
      quantityInCart: 0
    };
    this.products = [
      new Product('Food', 1234, 'https://pixabay.com/get/57e4d1414a51a814f6d1867dda35367b1c3ddde75657784b_1920.jpg', true, 0),
     ];

    this.quantities = [];
    for (let i = 0; i < 20; i++) {
      this.quantities.push(i);
    }
    this.prodClass = {
      'prodContainer.sale': this.products.onsale,
    };
  }
  increamentCart() {
    this.products.quantityInCart++;
  }
  decreamentCart() {
    if (this.products.quantityInCart > 0) {
      this.products.quantityInCart--;
    }
  }

  trackByName(index, prodname) {
    return prodname.name;
  }
  setDropDownValue(drpValue: any) {
    this.dropdownvalue = drpValue.target.value;
  }
  onQtyChange(qty) {
    console.log('Quantity change: ', qty);
  }
}
