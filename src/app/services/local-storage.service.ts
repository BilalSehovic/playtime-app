import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  public getItem(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  public setItem(key: string, value: any): boolean {
    var output = true;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      output = false;
    } finally {
      return output;
    }
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }
}