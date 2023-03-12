import {Component} from '@angular/core';
import { Child } from './models/child';
import { User } from './models/user';
import { UserRole } from './models/user-role.enum';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'ArchitectUI - Angular 7 Bootstrap 5 & Material Design Admin Dashboard Template';

  constructor(localStorageService: LocalStorageService) {
    let users = [];
    
    let u = new User();
    u.id = 1;
    u.email = 'parent';
    u.password = 'parent';
    u.role = UserRole.Parent;
    u.children = [];
    let child = new Child();
    child.name = 'Bob';
    child.age = 5;
    child.interests = ['auta', 'crtici', 'citanje'];
    u.children.push(JSON.parse(JSON.stringify(child)));
    child.name = 'Alice';
    child.age = 3;
    child.interests = ['lutke', 'balet', 'dinosauri'];
    u.children.push(JSON.parse(JSON.stringify(child)));
    users.push(JSON.parse(JSON.stringify(u)));

    u.id = 1;
    u.email = 'moderator';
    u.password = 'moderator';
    u.role = UserRole.Moderator;
    u.children = [];
    users.push(JSON.parse(JSON.stringify(u)));

    u.id = 1;
    u.email = 'guest';
    u.password = 'guest';
    u.role = UserRole.Guest;
    u.children = [];
    users.push(JSON.parse(JSON.stringify(u)));
    localStorageService.setItem('users', users);
  }
}
