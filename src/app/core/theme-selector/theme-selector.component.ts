import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ThemeService} from '../services/theme-service.service';
import {ThemeTypes} from '../enums/ThemeTypes';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss'],
  animations: [
    trigger('opener', [
      state('close', style({
        'transform': 'translateX(12rem)'
      })),
      state('open', style({
        'transform': 'translateX(0)'
      })),
      transition('close <=> open', animate(200))
    ])
  ]
})
export class ThemeSelectorComponent implements OnInit {

  state = 'close';
  themeTypes = ThemeTypes;


  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {

  }

  onToggle(): void {
    this.state = this.state === 'close' ? 'open' : 'close';
  }

  onChangeTheme(themeType: ThemeTypes): void {
    console.log(themeType);
    this.themeService.setTheme(themeType);
  }

}
