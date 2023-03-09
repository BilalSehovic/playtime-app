import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  public isAuthenticated(): boolean {
    const users = this.getUsers() ?? [];
    const currentUser = this.getCurrentUser() ?? new User();
    return users.some(e => e.email == currentUser.email && e.password == currentUser.password);
  }

  public getUsers(): User[] {
    return this.localStorageService.getItem('users') as User[] ?? [];
  }

  public getCurrentUser(): User {
    return this.localStorageService.getItem('currentUser') as User;
  }

  public login(user: User): boolean {
    this.localStorageService.setItem('currentUser', user);
    return this.isAuthenticated();
  }

  public logout(): void {
    this.localStorageService.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  public register(user: User): void {
    var users = this.getUsers();
    users.push(user);
    this.localStorageService.setItem('users', users);
    this.localStorageService.setItem('currentUser', user);
    this.router.navigate(['/']);
  }
}