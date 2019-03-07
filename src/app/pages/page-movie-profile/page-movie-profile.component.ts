import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-page-movie-profile',
  templateUrl: './page-movie-profile.component.html',
  styleUrls: ['./page-movie-profile.component.css']
})
export class PageMovieProfileComponent implements OnInit {

  movie = null

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const movieId = this.route.snapshot.params.id
    this.movie = await this.moviesService.fetchMovieById(movieId)
  }

}
