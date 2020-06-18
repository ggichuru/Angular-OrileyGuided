import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public stock: Stock;
  public stockClasses;
  public stockStyles;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock('New Stock Company', 'NSC', 78, 90);
    const diff = (this.stock.price / this.stock.previousPrice) - 1;
    const largeChange = Math.abs(diff) > 0.01;

    this.stockClasses = {
      positive : this.stock.isPositiveChange(),
      negative : !this.stock.isPositiveChange(),
      'large-change' : largeChange,
      'small-change' : !largeChange,
    };

    this.stockStyles = {
      color : this.stock.isPositiveChange() ? 'green' : 'red',
      'font-size' : largeChange ? '1.8em' : '0.8em'
    };
  }

  toogleFavorite(event) {
    console.log('We are toggling a favorite stock!', event);
    this.stock.favorite = !this.stock.favorite;
  }

}
