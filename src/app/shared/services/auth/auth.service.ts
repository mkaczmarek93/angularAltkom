import { Injectable } from '@angular/core';

import { LocalStorageService } from '../local-storage/local-storage.service';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  register(formData: any): any {
    return new Promise((resolve, reject) => {
      const users = this.localStorageService.get('users') || [];
      users.push(formData);
      this.localStorageService.save('users', users);
      setTimeout(() => {
        resolve({ status: 'ok' });
      }, 200)
    })
  }

  authenticate(formData) {
    return new Promise((resolve, reject) => {
      const users = this.localStorageService.get('users') || [];
      const status = users.find((user) => {
        return user.email === formData.email
          && user.password === formData.password
      });
      if (status) {
        resolve({ status: 'ok' });
      } else {
        reject({ status: 'err' })
      }
    })
  }

  saveLoggedUser(user): any {
    return new Promise((resolve, rejected) => {
        this.localStorageService.save('logged-user', user.email);
        setTimeout(resolve, 200, { status: 'ok' })
    })
  }

}
