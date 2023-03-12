import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private localStorageService: LocalStorageService, private userService: UserService, private router: Router) {}

  public isAuthenticated(): boolean {
    const users = this.userService.getUsers() ?? [];
    const currentUser = this.userService.getCurrentUser() ?? new User();
    return users.some(e => e.email == currentUser.email && e.password == currentUser.password);
  }

  public login(user: User): boolean {
    let existingUser = this.userService.getUsers().find(e => e.email == user.email && e.password == user.password);
    user = existingUser ?? user;
    this.localStorageService.setItem('currentUser', String(user.email));
    return this.isAuthenticated();
  }

  public logout(): void {
    this.localStorageService.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}