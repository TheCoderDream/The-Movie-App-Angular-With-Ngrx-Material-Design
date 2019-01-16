import {MovieTypes} from '../enum/MovieTypes';

export interface Movie {
  id?: string ;
  title: string;
  year: number;
  rate: number;
  type: MovieTypes;
}
