import { Injectable } from '@angular/core';

import { LocalStorageService } from '../local-storage/local-storage.service';

import { Status } from '../../interfaces/status.interface';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  register(formData): Promise<Status> {
    return new Promise((resolve, reject) => {
      const users = this.localStorageService.get('users') || [];
      users.push(formData);
      this.localStorageService.save('users', users);
      setTimeout(() => {
        resolve({ status: 'ok' });
      }, 200)
    })
  }

  authenticate(formData): Promise<Status> {
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

  saveLoggedUser(user): Promise<Status> {
    return new Promise((resolve, rejected) => {
      this.localStorageService.save('logged-user', user.email);
      setTimeout(resolve, 200, { status: 'ok' })
    })
  }

  isUserLogged(): Promise<Status> {
    return new Promise((resolve, rejected) => {
      const status = this.localStorageService.get('logged-user');
      if (status) {
        setTimeout(resolve, 200, { status: 'ok' })
      } else {
        setTimeout(rejected, 200, { status: 'err' })
      }
    })
  }

  getUserByEmail(userEmail: string): Promise<User> {
    return new Promise((resolve, reject) => {
      const users = this.localStorageService.get('users') || [];
      const foundUser = users.find((user) => {
        return user.email === userEmail;
      });

      if (foundUser) {
        resolve(foundUser);
      } else {
        reject(null);
      }
    });
  }

  getLoggedUserName(): Promise<string> {
    return new Promise((resolve, rejected) => {
      const loggedUser = this.localStorageService.get('logged-user');
      if (loggedUser) {
        this.getUserByEmail(loggedUser)
        .then((user)=>{
          setTimeout(resolve, 200, `${user.person.name} ${user.person.surname}`);
        });
      } else {
        setTimeout(rejected, 200, 'Unknown')
      }
    })
  }

}
