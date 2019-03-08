import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PageMovieListComponent } from './page-movie-list.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieListItemComponent } from '../../components/movie-list-item/movie-list-item.component';
import { Movie } from '../../interfaces/movie.interface';
import { MovieList } from '../../interfaces/movie-list.interface';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageMovieListComponent', () => {
  let component: PageMovieListComponent;
  let fixture: ComponentFixture<PageMovieListComponent>;
  let $element: HTMLElement = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageMovieListComponent,
        MovieListComponent,
        MovieListItemComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMovieListComponent);
    component = fixture.componentInstance;
    $element = fixture.debugElement.nativeElement
  });

  afterEach(()=>{
    fixture.debugElement.nativeElement.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display thumb list', fakeAsync(() => {
    const movie: Movie = {
      id: 'fake-id',
      title: 'fake-title',
      description: 'fake-description',
      thumb_url: 'fake-thumb_url',
      movie_url: 'fake-movie_url',
      year: 1234,
      duration: 123,
      rate: 12
    }

    // 1. Mockowanie
    const movies: MovieList = [movie, movie, movie, movie];
    component.getMovies = () => Promise.resolve(movies);
    expect(component.movies).toEqual(null);

    // 2. Renderowanie komponentu - ngOnInit
    fixture.detectChanges();

    // 3. Zakończ wszystkie asynchroniczne akcje
    flush();
    expect(component.movies.length).toEqual(4);

    // 4. Aktualizacja widoku
    fixture.detectChanges();

    const list = $element.querySelectorAll('app-movie-list-item');
    expect(list.length).toBeGreaterThan(3);
  }));
});
