import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  name: string;
  code: string;
  price: number;
  previousPrice: number;
  positiveChange: boolean;
  favorite: boolean;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Our stock company';
    this.code = 'OSC';
    this.previousPrice = 80;
    this.price = 85;
    this.positiveChange = this.price >= this.previousPrice;
    this.favorite = false;
  }

  toogleFavorite(event) {
    console.log('We are toogling a favorite stock!', event);
    this.favorite = !this.favorite;
  }

}
