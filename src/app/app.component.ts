import {Component} from '@angular/core';
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
    users.push(JSON.parse(JSON.stringify(u)));
    u.id = 1;
    u.email = 'moderator';
    u.password = 'moderator';
    u.role = UserRole.Moderator;
    users.push(JSON.parse(JSON.stringify(u)));
    u.id = 1;
    u.email = 'guest';
    u.password = 'guest';
    u.role = UserRole.Guest;
    users.push(JSON.parse(JSON.stringify(u)));
    localStorageService.setItem('users', users);
  }
}
