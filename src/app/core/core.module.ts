import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {
  MatButtonModule, MatDialog, MatDialogModule,
  MatIconModule,
  MatNativeDateModule, MatRadioModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';
import {RouterModule} from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
@NgModule({
  declarations: [HeaderComponent, ThemeSelectorComponent, DialogComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatRadioModule,
    RouterModule,
    MatDialogModule
  ],
  entryComponents: [
    DialogComponent
  ],
  exports: [
    HeaderComponent,
    ThemeSelectorComponent,
    DialogComponent
  ],

})
export class CoreModule { }
