import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {

  movie = {
    id: 'SbrOMrjhyvI',
    title: 'Serenity',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate sit amet odio ac porttitor. Cras facilisis magna volutpat erat mollis, a malesuada ante rutrum. Ut eget ex non dui ullamcorper vulputate. Mauris metus risus, consequat in metus at, volutpat mattis est.',
    thumb_url: 'http://i3.ytimg.com/vi/SbrOMrjhyvI/hqdefault.jpg',
    movie_url: 'https://www.youtube.com/embed/SbrOMrjhyvI',
    year: 2018,
    duration: 130,
    rate: 7.7
  };

  playerStatus: string = 'Loading'

  handleStatus(event) {
    switch (event.status) {
      case 'playing':
        this.playerStatus = 'Playing';
        break;
      case 'paused':
        this.playerStatus = "Paused";
        break;
      default:
        this.playerStatus = "Player is idle";
    }
  }

}
