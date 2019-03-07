import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from 'src/app/interfaces/movie.interface';

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
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    setTimeout(()=>{
      this.movie.rate = 10;
      this.changeDetector.markForCheck() // Informujemy o zmianach wewnątrz komponentu, domyślnie zmiany są wykrywalne tylko z zewnątrz
    }, 2000)
  }

  redirectMovieProfile() {
    this.router.navigateByUrl('movies/' + this.movie.id);
  }

  buildRate() {
    console.log(1)
    return this.movie.rate * 10 + '%'
  }

}
