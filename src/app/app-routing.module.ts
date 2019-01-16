import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieContainerComponent} from './movies/container/container.component';
import {AddMovieComponent} from './movies/add-movie/add-movie.component';

const routes: Routes = [
  {path: 'movie', component: AddMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
