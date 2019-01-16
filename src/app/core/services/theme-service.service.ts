import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ThemeTypes} from '../enums/ThemeTypes';

@Injectable()
export class ThemeService {
  private themePalletObservable: Subject<ThemeTypes> = new Subject<ThemeTypes>();
  public themePallet = this.themePalletObservable.asObservable();
  public currentSelectedThemeType = '';
  constructor() {
  }


  setTheme(themeType: ThemeTypes) {
    this.currentSelectedThemeType = themeType;
    this.themePalletObservable.next(themeType);
  }


}
