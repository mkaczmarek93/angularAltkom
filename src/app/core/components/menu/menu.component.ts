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

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(this.verifyLoggedUser.bind(this));

    this.verifyLoggedUser();
  }

  async verifyLoggedUser() {
    try {
      await this.auth.isUserLogged()
      this.isLoggedUser = true
    } catch (err) {
      this.isLoggedUser = false
    }
  }
}
