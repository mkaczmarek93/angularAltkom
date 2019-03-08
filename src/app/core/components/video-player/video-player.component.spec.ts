import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayerComponent } from './video-player.component';
import { Movie } from '../../interfaces/movie.interface';
import { EventEmitter } from '@angular/core';

describe('VideoPlayerComponent', () => {
  let component: VideoPlayerComponent;
  let fixture: ComponentFixture<VideoPlayerComponent>;
  let $element: HTMLElement = null;

  let movie = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoPlayerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayerComponent);
    component = fixture.componentInstance;
    $element = fixture.debugElement.nativeElement;
    setup()
  });

  afterEach(() => {
    fixture.debugElement.nativeElement.remove();
  });

  function setup() {
    // Given
    movie = <Movie>{
      thumb_url: 'fake-thumb_url'
    };
    component.movie = movie;
    component.status = new EventEmitter();
    component.player = {
      nativeElement: {
        play: () => { }
      }
    };
    fixture.detectChanges();
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should video playing after click to play button', () => {
    spyOn(component, 'play');
    component.status
      .subscribe((event) => {
        // Then
        expect(event.status).toEqual('playing');
      });

    // When
    const $play = $element.querySelectorAll('button')[0];
    $play.click();

    // Then
    expect(component.play).toHaveBeenCalled();
  });

  it('should video pause after click pause button', () => {
    spyOn(component, 'play');
    spyOn(component, 'pause');
    const statuses = ['playing', 'paused'];
    let actionNumber = 0;
    component.status
      .subscribe((event) => {
        // Then
        expect(event.status).toEqual(status[actionNumber]);
      });

    // When
    const $play = $element.querySelectorAll('button')[0];
    $play.click();
    actionNumber = 1;
    const $pause = $element.querySelectorAll('button')[1];
    $pause.click();

    // Then
    expect(component.play).toHaveBeenCalled();
    expect(component.pause).toHaveBeenCalled();
  });
});
