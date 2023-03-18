import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: any[] = [];

  constructor() {}

  public getItem(key: string): any {
    /** Switching from local storage to in-memory storage that lives while the app lives */
    // return JSON.parse(localStorage.getItem(key));
    let output = this.storage.find(e => e.key == key)?.value ?? null;
    return output;
  }

  public setItem(key: string, value: any): boolean {
    /** Switching from local storage to in-memory storage that lives while the app lives */
    var output = true;
    try {
      // localStorage.setItem(key, JSON.stringify(value));
      this.storage.push({key: key, value: value})
    } catch (error) {
      output = false;
    } finally {
      return output;
    }
  }

  public removeItem(key: string): boolean {
    /** Switching from local storage to in-memory storage that lives while the app lives */
    // localStorage.removeItem(key);
    let output = false;

    let index = this.storage.findIndex(e => e.key == key);
    if (index > -1) {
      this.storage.splice(index, 1);
      output = true;
    }

    return output;
  }

  public resetData(): void {
    this.storage = [];
  }
}