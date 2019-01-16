import { MovieSortPipe } from './movie-sort.pipe';

describe('MovieSortPipe', () => {
  it('create an instance', () => {
    const pipe = new MovieSortPipe();
    expect(pipe).toBeTruthy();
  });
});
