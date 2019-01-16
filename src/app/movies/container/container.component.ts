import {AfterContentInit, AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {Movie} from '../models/Movie';
import {MovieTypes} from '../enum/MovieTypes';
import * as fromApp from '../../store/app.reducers';
import * as MovieListActions from '../store/movies.action';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {SortTypes} from '../enum/SortTypes';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-movie-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class MovieContainerComponent implements OnInit, AfterContentInit {


  movieListState: Observable<{ movies: Movie[] }>;
  movie: Movie = {id: '0', type: MovieTypes.FILM, rate: 9, title: 'Avangers', year: 2006};
  page = 1;
  MovieTypes = MovieTypes;
  SortingTypes = SortTypes;

  sorting = {type: '', sorting: ''};

  @ViewChild('outlet', {read: ViewContainerRef}) outletRef: ViewContainerRef;
  @ViewChild('content', {read: TemplateRef}) contentRef: TemplateRef<any>;

  constructor(private store: Store<fromApp.AppState>) {
    /*   for (let i = 0; i < 100; i++) {
         this.movie.year++;
         this.movie.id = i + '';
         this.movie.rate = Math.floor(Math.random() * 11);
         this.movies.push({...this.movie});
       } */

  }


  ngOnInit() {
    this.movieListState = this.store.select('movieList');
  }

  next() {
    this.page++;
  }

  prev() {
    this.page--;
  }

  goToPage(loc: number): void {
    this.page = loc;
  }

  changeShorting(value: string, key: string): void {
    this.sorting[key] = value;
    this.sorting = {...this.sorting};
    this.rerender();
  }

  ngAfterContentInit() {
    this.outletRef.createEmbeddedView(this.contentRef);
  }
  private rerender() {
    this.outletRef.clear();
    this.outletRef.createEmbeddedView(this.contentRef);
  }
}
