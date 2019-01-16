import {Component, OnInit} from '@angular/core';
import {ThemeService} from './core/services/theme-service.service';
import {Observable} from 'rxjs';
import {ThemeTypes} from './core/enums/ThemeTypes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  page = 1;
  collection = [];
  constructor(private themeService: ThemeService) {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }

  themeObservable: Observable<ThemeTypes>;
  activeTheme = '';

  ngOnInit() {
    this.themeService.themePallet.subscribe(newTheme => {
      console.log(newTheme);
      this.activeTheme = newTheme;
    });
  }




  goToPage(n: number): void {
    this.page = n;
  }

  next(): void {
    this.page++;
  }

  prev(): void {
    this.page--;
  }
}
