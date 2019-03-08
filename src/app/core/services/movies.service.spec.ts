import { TestBed, fakeAsync, flush } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MoviesService } from './movies.service';

describe('MoviesService', () => {

  let service: MoviesService = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.get(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchMovies', () => {

    it('should exists', () => {
      expect(service.fetchMovies).toEqual(jasmine.any(Function))
    });
  });

  describe('fetchPromoMovies', () => {

    it('should exists', () => {
      expect(service.fetchPromoMovies).toEqual(jasmine.any(Function))
    });
  });

  describe('fetchMovieById', () => {

    it('should exists', () => {
      expect(service.fetchMovieById).toEqual(jasmine.any(Function))
    });
  });
});
