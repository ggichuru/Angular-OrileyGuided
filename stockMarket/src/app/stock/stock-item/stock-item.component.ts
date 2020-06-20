import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stockClasses;
  public stockStyles;
  public stocks;
  public dropdownvalue;

  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock('New Stock Company', 'NSC', 78, 90),
      new Stock('Second Stock Company', 'SSC', 85, 20),
      new Stock('Third Stock Ltd', 'TSL', 56889, 2),
      new Stock('Fourth Stock Ltd', 'FSL', 5, 20)
    ];

    const diff = (this.stocks.price / this.stocks.previousPrice) - 1;
    const largeChange = Math.abs(diff) > 0.01;

    // this.stockClasses = {
    //   positive : this.stocks.isPositiveChange(),
    //   negative : !this.stocks.isPositiveChange(),
    //   'large-change' : largeChange,
    //   'small-change' : !largeChange,
    // };
    //
    // this.stockStyles = {
    //   color : this.stocks.isPositiveChange() ? 'green' : 'red',
    //   'font-size' : largeChange ? '1.8em' : '0.8em'
    // };
  }


  toogleFavorite(event, index) {
    console.log('We are toggling a favorite stock!', event);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }

  trackStockByCode(index, stock) {
    return stock.code;
  }
  setDropDownValue(drpValue: any) {
    this.dropdownvalue = drpValue.target.value;
  }
}
