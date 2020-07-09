import {
  Component,
  OnInit,
  SimpleChanges,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterViewChecked,
  AfterViewInit,
  AfterContentChecked,
  AfterContentInit} from '@angular/core';
import {Stock} from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy,
                                    OnChanges, DoCheck,
                                    AfterContentInit, AfterContentChecked,
                                    AfterViewInit, AfterViewChecked {
  title = 'stockMarket';


  public stockObj: Stock;
  private counter = 1;

  ngOnInit() {
    this.stockObj = new Stock('Test Set Test - ' + this.counter++ , 'TST', 455, 45);
    this.stockObj = new Stock('Stock Is A Stock', 'SIAS', 3455, 322);
  }

  onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock ', stock, 'was triggered');
    this.stockObj.favorite = !this.stockObj.favorite;
  }

  changeStockObject() {
    this.stockObj = new Stock('Test Set Test - ' + this.counter++ , 'TST', 455, 45);
  }
  changeStockPrice() {
    this.stockObj.price += 10;
  }

  ngAfterViewInit(): void {
    console.log('App component - After view Init');
  }
  ngAfterViewChecked(): void {
    console.log('App component - After View Checked');
  }
  ngAfterContentInit(): void {
    console.log('App component - After Content Init');
  }
  ngAfterContentChecked(): void {
    console.log('App component - After Content Checked');
  }

  ngDoCheck(): void {
    console.log('App component - Do Check');
  }

  ngOnDestroy(): void {
    console.log('App Component - On Destroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('App Component - On Changes', changes);
  }

  testMethod() {
    console.log('Test Method in AppComponent Triggered.');
  }
}
