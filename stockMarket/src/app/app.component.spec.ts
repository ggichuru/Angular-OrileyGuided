import {AppComponent } from './app.component';
import {Stock} from './model/stock';
import {TestBed, async} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StockItemComponent } from './stock/stock-item/stock-item.component';

describe('AppComponent', () => {

  describe('Simple, no Angular unit test', () => {
    it('should have stock instantiated on ngInit', () => {
      const appComponent = new AppComponent();
      expect(appComponent.stockObj).toBeUndefined();
      appComponent.ngOnInit();
      expect(appComponent.stockObj).toEqual(
        new Stock('Test Set Test - ' , 'TST', 455, 45)
      );
    });

    it('should have toggle stock function', () => {
      const appComponent = new AppComponent();
      appComponent.ngOnInit();
      expect(appComponent.stockObj.favorite).toBeFalsy();
      appComponent.onToggleFavorite(new Stock('Test', 'TEST', 54, 55));
      expect(appComponent.stockObj.favorite).toBeTruthy();
      appComponent.onToggleFavorite(new Stock('Test', 'TEST', 54, 55));
      expect(appComponent.stockObj.favorite).toBeFalsy();
    });
  });

  describe('Angular Aware Test', () => {
    let fixture;
    let component;

    beforeEach(async () => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          StockItemComponent,
        ],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should load stock with default values', () => {
      const titleEl = fixture.debugElement.query(By.css('h1'));
      expect(titleEl.nativeElement.textContent.trim())
        .toEqual('stockMarket');

      const nameEl = fixture.debugElement.query(By.css('.name'));
      expect(nameEl.nativeElement.textContent)
      .toEqual('Test Stock Company (TSC)');
      const priceEl = fixture.debugElement.query(By.css('.price.positive'));
      expect(priceEl.nativeElement.textContent).toEqual('$ 85');
      const addToFavoriteBtnEl = fixture.debugElement.query(By.css('button'));
      expect(addToFavoriteBtnEl).toBeDefined();
    });
  });
} );
