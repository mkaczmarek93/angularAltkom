import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent implements OnInit {

  @Input() movies = null

  constructor() { }

  ngOnInit() {
  }

}
