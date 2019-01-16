import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieComponent} from './movie/movie.component';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatRadioModule
} from '@angular/material';
import {MovieContainerComponent} from './container/container.component';
import {CustomPaginationModule} from '../custom-pagination/custom-pagination.module';
import {AddMovieComponent} from './add-movie/add-movie.component';
import {MoviesRoutingModule} from './movies.routing.module';
import {CoreModule} from '../core/core.module';
import {MovieSortPipe} from './pipes/movie-sort.pipe';
import {RemoveDialogComponent} from './remove-dialog/remove-dialog.component';
import {FormsModule} from '@angular/forms';
import {AddDialogComponent} from './add-dialog/add-dialog.component';

@NgModule({
  declarations: [MovieComponent, MovieContainerComponent, AddMovieComponent, RemoveDialogComponent, AddDialogComponent, MovieSortPipe],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    CustomPaginationModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatRadioModule,
    MatDialogModule,
    MoviesRoutingModule,
    CoreModule,
    FormsModule
  ],
  entryComponents: [
    RemoveDialogComponent,
    AddDialogComponent
  ],
  exports: [
    MovieComponent,
    MovieContainerComponent,
    AddMovieComponent,
    AddDialogComponent
  ]
})
export class MoviesModule {
}
