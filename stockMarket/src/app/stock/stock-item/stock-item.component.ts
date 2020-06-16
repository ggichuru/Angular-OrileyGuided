import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public stock: Stock;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock('New Stock Company', 'NSC', 80, 90);
  }

  toogleFavorite(event) {
    console.log('We are toogling a favorite stock!', event);
    this.stock.favorite = !this.stock.favorite;
  }

}
