import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MovieList } from 'src/app/interfaces/movie-list.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  fetchMovies() {
    return this.http.get<MovieList>('/assets/movies.json').toPromise();
  }

  async fetchMovieById(movieId: string) {
    // not correct
    // this.fetchMovies()
    //   .then((movies) => {
    //     return movies.find((movie) => {
    //       return movie.id === movieId;
    //     })
    //   })

    const movies = await this.fetchMovies();
    return movies.find((movie) => movie.id === movieId)
  }
}
