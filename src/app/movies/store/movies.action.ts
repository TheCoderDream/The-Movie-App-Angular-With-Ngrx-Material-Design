import {Action} from '@ngrx/store';
import {MoviesActionTypes} from './MoviesActionTypes';
import {Movie} from '../models/Movie';


export class AddMovie implements Action {
  readonly type = MoviesActionTypes.ADD_MOVIE;

  constructor(public payload: Movie) {
  }
}

export class RemoveMovie implements Action {
  readonly type = MoviesActionTypes.REMOVE_MOVIE;

  constructor(public payload: string) {}
}

export type MoviesActions = AddMovie | RemoveMovie;
