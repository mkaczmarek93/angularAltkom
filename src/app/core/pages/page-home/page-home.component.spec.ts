import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageHomeComponent } from './page-home.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { MovieListItemComponent } from '../../components/movie-list-item/movie-list-item.component';

import { Movie } from '../../interfaces/movie.interface';
import { MovieList } from '../../interfaces/movie-list.interface';

describe('PageHomeComponent', () => {
  let component: PageHomeComponent;
  let fixture: ComponentFixture<PageHomeComponent>;
  let $element: HTMLElement = null

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageHomeComponent,
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
    fixture = TestBed.createComponent(PageHomeComponent);
    component = fixture.componentInstance;
    $element = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    fixture.debugElement.nativeElement.remove()
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should app simple numbers', () => {
    expect(component.addNumbers(2, 2)).toEqual(4);
    expect(component.addNumbers(2, -2)).toEqual(0);
    expect(component.addNumbers(-2, -2)).toEqual(-4);
    expect(component.addNumbers(0, 0)).toEqual(0);
    expect(component.addNumbers(24, 18)).toEqual(42);
    expect(component.addNumbers("michal", "kaczmarek")).toEqual(null);
  })

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
    const movies: MovieList = [movie, movie, movie];
    component.getPromoMovies = () => Promise.resolve(movies);
    expect(component.movies).toEqual(null);

    // 2. Renderowanie komponentu - ngOnInit
    fixture.detectChanges();

    // 3. Zakończ wszystkie asynchroniczne akcje
    flush();
    expect(component.movies.length).toEqual(3);

    // 4. Aktualizacja widoku
    fixture.detectChanges();

    const list = $element.querySelectorAll('app-movie-list-item');
    expect(list.length).toEqual(3);
  }));
});
