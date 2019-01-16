import {Store} from '@ngrx/store';
import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Movie} from '../models/Movie';
import {MovieTypes} from '../enum/MovieTypes';
import {animate, state, style, transition, trigger} from '@angular/animations';

import * as fromApp from '../../store/app.reducers';
import * as MovieListActions from '../store/movies.action';
import {DialogComponent} from '../../core/dialog/dialog.component';
import {MatDialog} from '@angular/material';
import {RemoveDialogComponent} from '../remove-dialog/remove-dialog.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  animations: [
    trigger('activate',
      [
        state('onto', style({
          'opacity': '1'
        })),
        state('off', style({
          'opacity': '0'
        })),
        transition('onto <=> off', animate(200))
      ])
  ]
})
export class MovieComponent implements OnInit {

  @Input('movie') movie: Movie = {id: '1', title: 'Batman', year: 2005, rate: 9, type: MovieTypes.FILM};
  @ViewChild('secondDialog') movieRemoveDialog;
  deleteButtonState = 'off';

  constructor(private store: Store<fromApp.AppState>, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onActivate(): void {
    this.deleteButtonState = 'onto';
  }

  onDeactivate(): void {
    this.deleteButtonState = 'off';
  }

  onRemoveMovie(): void {
    this.openDialog();
  }

  incrementByOne(): void {
    if (this.movie.rate < 10) {
      this.movie.rate++;
    }
  }

  decrementByOne(): void {
    if (this.movie.rate > 0) {
      this.movie.rate--;
    }
  }

  openDialog(tempalteRef?: TemplateRef<any>): void {

    //   this.dialog.open(this.movieRemoveDialog);
    const dialogRef = this.dialog.open(RemoveDialogComponent, {
      width: '250px',
      data: this.movie
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new MovieListActions.RemoveMovie(this.movie.id));
      }
    });
  }


}
