import { Component, OnInit, Input, ChangeDetectionStrategy, ElementRef, EventEmitter, Output, HostBinding, ViewChild } from '@angular/core';

import { Movie } from 'src/app/core/interfaces/movie.interface';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoPlayerComponent implements OnInit {

  movieUrl = 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4';

  @Input() movie: Movie = null;
  @Output() status = new EventEmitter();
  @ViewChild('player') player: ElementRef;

  constructor(
    private $element: ElementRef
  ) { }

  ngOnInit() {
  }

  play() {
    this.status.next({ status: 'playing' });
    this.player.nativeElement.play()
  }

  pause() {
    this.status.next({ status: 'paused' });
    this.player.nativeElement.pause()
  }

  fullscreen() {
    if (!document['fullscreenElement']) {
      this.$element.nativeElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}
