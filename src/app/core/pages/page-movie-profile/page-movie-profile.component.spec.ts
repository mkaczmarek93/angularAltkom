import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageMovieProfileComponent } from './page-movie-profile.component';
import { VideoPlayerComponent } from '../../components/video-player/video-player.component';

describe('PageMovieProfileComponent', () => {
  let component: PageMovieProfileComponent;
  let fixture: ComponentFixture<PageMovieProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageMovieProfileComponent,
        VideoPlayerComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMovieProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
