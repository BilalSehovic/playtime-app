import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { dbSeeder } from '../db-seeder';
import { Child } from '../models/child';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  public getUsers(): User[] {
    return this.localStorageService.getItem('users') as User[] ?? [];
  }

  public getCurrentUser(): User {
    let currentUser = this.localStorageService.getItem('currentUser');
    let user = this.getUsers().find(e => e.email == currentUser);
    return user as User;
  }

  public register(user: User): void {
    var users = this.getUsers();
    users.push(user);
    this.localStorageService.setItem('users', users);
    this.localStorageService.setItem('currentUser', user.email);
    this.router.navigate(['/']);
  }

  public addChild(child: Child): void {
    var users = this.getUsers();
    var user = this.getCurrentUser();
    child.id = Math.max(...user.children.map(e => e.id)) + 1;
    child.id = (child.id == -Infinity) ? 1 : child.id;
    users.find(e => e.email == user.email && e.password == user.password).children.push(child);
    this.localStorageService.setItem('users', users);
    this.router.navigate(['/children']);
  }

  public resetData(): void {
    this.localStorageService.resetData();
    dbSeeder(this.localStorageService);
  }
}