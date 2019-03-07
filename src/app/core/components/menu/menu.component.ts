import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators'

import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedUser = false;
  loggedUserName = ''

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.verifyLoggedUser();
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(this.verifyLoggedUser.bind(this));
  }

  async verifyLoggedUser() {
    try {
      await this.auth.isUserLogged();
      this.isLoggedUser = true;
      this.loggedUserName = await this.auth.getLoggedUserName();
    } catch (err) {
      this.isLoggedUser = false;
    }
  }
}
