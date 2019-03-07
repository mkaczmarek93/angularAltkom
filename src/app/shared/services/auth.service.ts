import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  register(formData: any): any {
    return new Promise((resolve, reject) => {
      this.localStorageService.save('user', formData);
      setTimeout(() => {
        resolve({ status: 'ok' });
      }, 200)

      // setTimeout(resolve, 200, { status: 'ok' })
    })
  }
}
