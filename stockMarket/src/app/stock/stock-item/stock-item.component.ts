import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  ChangeDetectionStrategy,
  Component, DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output, SimpleChanges
} from '@angular/core';
import {Stock} from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockItemComponent implements OnInit, OnDestroy,
  OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked {
  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  ngOnInit() {

  }


  onToggleFavorite() {
    this.toggleFavorite.emit(this.stock);
  }
  changeStockPrice() {
    this.stock.price += 5;
  }

  trackStockByCode(index, stock) {
    return stock.code;
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
}
