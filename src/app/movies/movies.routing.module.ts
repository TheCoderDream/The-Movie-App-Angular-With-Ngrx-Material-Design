import {MovieContainerComponent} from './container/container.component';
import {AddMovieComponent} from './add-movie/add-movie.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const authRoutes: Routes = [
  { path: '', component: MovieContainerComponent, pathMatch: 'full' },
  { path: 'movies', component: MovieContainerComponent },
  { path: 'add-new-movie', component: AddMovieComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
