import { Component, OnInit } from '@angular/core';
import {Stock} from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stockMarket';

  public stockObj: Stock;

  ngOnInit() {
    this.stockObj = new Stock('Test Set Test', 'TST', 455, 45);
    this.stockObj = new Stock('Stock Is A Stock', 'SIAS', 3455, 322);
  }

  onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock ', stock, 'was triggered');
    this.stockObj.favorite = !this.stockObj.favorite;
  }
}
