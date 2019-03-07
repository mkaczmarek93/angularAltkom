import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from 'src/app/core/interfaces/movie.interface';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css'],
  encapsulation: ViewEncapsulation.Native,
  changeDetection: ChangeDetectionStrategy.OnPush // Odświeżenie komponentu tylko kiedy są w nim jakieś zminny
})
export class MovieListItemComponent implements OnInit {

  @Input() movie: Movie = null;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  redirectMovieProfile() {
    this.router.navigateByUrl('movies/' + this.movie.id);
  }

  buildRate() {
    return this.movie.rate * 10 + '%'
  }

}
