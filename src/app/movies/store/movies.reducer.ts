import {Movie} from '../models/Movie';
import {MovieTypes} from '../enum/MovieTypes';

import * as MoviesActions from './movies.action';
import {MoviesActionTypes} from './MoviesActionTypes';

export interface State {
  movies: Movie[];
}

const initialState: State = {
  movies: [
    {
      id: '1',
      title: 'The Shawshank Redemption',
      year: 1994,
      rate: 9,
      type: MovieTypes.FILM
    },
    {
      id: '2',
      title: 'The Godfather',
      year: 1972,
      rate: 9,
      type: MovieTypes.FILM
    },
    {
      id: '3',
      title: 'The Godfather: Part II',
      year: 1974,
      rate: 9,
      type: MovieTypes.FILM
    },
    {
      id: '4',
      title: 'The Dark Knight',
      year: 2008,
      rate: 9,
      type: MovieTypes.FILM
    },
    {
      id: '5',
      title: 'Schindler\'s List',
      year: 1993,
      rate: 9,
      type: MovieTypes.FILM
    },
    {
      id: '6',
      title: 'Pulp Fiction',
      year: 1994,
      rate: 9,
      type: MovieTypes.FILM
    },
    {
      id: '7',
      title: 'Fight Club',
      year: 1999,
      rate: 9,
      type: MovieTypes.FILM
    },
    {
      id: '8',
      title: 'Forrest Gump',
      year: 1994,
      rate: 8,
      type: MovieTypes.FILM
    },
    {
      id: '9',
      title: 'Inception',
      year: 2010,
      rate: 8,
      type: MovieTypes.FILM
    },
    {
      id: '10',
      title: 'The Godfather ',
      year: 1972,
      rate: 9,
      type: MovieTypes.FILM
    },
    {
      id: '11',
      title: 'The Godfather ',
      year: 1972,
      rate: 9,
      type: MovieTypes.FILM
    },
    {
      id: '12',
      title: 'The Godfather ',
      year: 1972,
      rate: 9,
      type: MovieTypes.FILM
    }
  ]
};
const create_UUID = () => {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
};

export function movieListReducer(state = initialState, action: MoviesActions.MoviesActions) {
  switch (action.type) {
    case MoviesActionTypes.ADD_MOVIE:
      action.payload.id = create_UUID();
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };
    case MoviesActionTypes.REMOVE_MOVIE:
      const newMovieList = [...state.movies];
      const findIndex = newMovieList.findIndex(el => el.id === action.payload);
      newMovieList.splice(findIndex, 1);
      return {
        ...state,
        movies: newMovieList
      };
    default:
      return state;
  }
}
