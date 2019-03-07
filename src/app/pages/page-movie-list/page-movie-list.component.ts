import { Component, OnInit } from '@angular/core';

import { MoviesService } from 'src/app/services/movies.service';
import { MovieList } from 'src/app/interfaces/movie-list.interface';

@Component({
  selector: 'app-page-movie-list',
  templateUrl: './page-movie-list.component.html',
  styleUrls: ['./page-movie-list.component.css']
})
export class PageMovieListComponent implements OnInit {

  movies: MovieList = null

  constructor(
    private moviesService: MoviesService
  ) { }

  async ngOnInit() {
    this.movies = await this.moviesService.fetchMovies()
  }

}
