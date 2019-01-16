import {Action} from '@ngrx/store';
import {MovieTypes} from '../enum/MovieTypes';



export interface State {
  typeFilter: MovieTypes;
  sort: string;
}
export class FilterMovie implements Action {
  readonly type = 'filter';

  constructor(public payload: MovieTypes) {
  }
}

export class SortMovie implements Action {
  readonly type = 'sort';

  constructor(public payload: string) {
  }
}


export type FilterAction = FilterMovie | SortMovie;


const initialState = {
  typeFilter: MovieTypes.ALL,
  sort: ''
};

export function movieFilterReducer(state = initialState, action) {
  switch (action.type) {

    case 'filter':
      return {
        ...state,
        typeFilter: action.payload
      };
    case 'sort':
      return {
        ...state,
        sort: action.payload
      };

    default:
      return state;
  }
}
