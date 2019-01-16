import {Component, OnInit, TemplateRef} from '@angular/core';
import {MovieTypes} from '../enum/MovieTypes';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as MovieListActions from '../store/movies.action';
import {Movie} from '../models/Movie';
import {RemoveDialogComponent} from '../remove-dialog/remove-dialog.component';
import {MatDialog} from '@angular/material';
import {AddDialogComponent} from '../add-dialog/add-dialog.component';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  MovieTypes = MovieTypes;

  constructor(private store: Store<fromApp.AppState>,  public dialog: MatDialog) { }

  ngOnInit() {
  }

  onAddMovie(form: NgForm) {
    const newMovie: Movie = {
      title: form.value.movieTitle,
      year: 2013,
      rate: form.value.movieRate,
      type: form.value.movieType
    };
    this.store.dispatch(new MovieListActions.AddMovie(newMovie));
    this.openDialog(newMovie);
  }

  openDialog(movie: Movie): void {

    //   this.dialog.open(this.movieRemoveDialog);
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '250px',
      data: movie
    });

  }

}
