import {AppComponent } from './app.component';
import {Stock} from './model/stock';

describe('AppComponent', () => {
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
} );
