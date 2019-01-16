import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomPaginationModule} from './custom-pagination/custom-pagination.module';
import {CoreModule} from './core/core.module';
import {ThemeService} from './core/services/theme-service.service';
import {MoviesModule} from './movies/movies.module';
import {INITIAL_STATE, State, StoreModule} from '@ngrx/store';
import {reducers} from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CustomPaginationModule,
    CoreModule,
    MoviesModule,
    StoreModule.forRoot(reducers)
  ],
  bootstrap: [AppComponent],
  providers: [
    ThemeService,
  ]
})
export class AppModule { }
