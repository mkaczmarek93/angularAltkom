import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  save(name: string, value: any): any {
    localStorage.setItem(name, JSON.stringify(value));
  }

  get(name: string): any {
    const value = localStorage.getItem(name);
    try {
      return JSON.parse(value)
    } catch (err) {
      return null
    }
  }

  remove(name: string) {
    localStorage.removeItem(name);
  }
}
