import { ActionReducerMap } from '@ngrx/store';

import * as fromMovieList from '../movies/store/movies.reducer';
import * as fromMovieFilter from '../movies/store/movieFilter.reducer';

export interface AppState {
  movieList: fromMovieList.State;
  movieFilter: fromMovieFilter.State;
}

export const reducers: ActionReducerMap<AppState> = {
  movieList: fromMovieList.movieListReducer,
  movieFilter: fromMovieFilter.movieFilterReducer
};
