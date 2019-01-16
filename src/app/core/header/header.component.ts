import {Component, OnInit} from '@angular/core';
import {ThemeTypes} from '../enums/ThemeTypes';
import {Observable} from 'rxjs';
import {ThemeService} from '../services/theme-service.service';
import {MovieTypes} from '../../movies/enum/MovieTypes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  themeObservable: Observable<ThemeTypes>;
  MovieTypes = MovieTypes;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    this.themeObservable = this.themeService.themePallet;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setTheme(ThemeTypes.GRAY);
  }
}
