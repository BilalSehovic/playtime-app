import {Component, OnInit} from '@angular/core';
import { UserRole } from '../../../../../models/user-role.enum';
import { AuthService } from '../../../../../services/auth.service';
import { UserService } from '../../../../../services/user.service';
import {ThemeOptions} from '../../../../../theme-options';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
})
export class UserBoxComponent implements OnInit {
  public email: string = '';
  public parent: boolean = false;
  public moderator: boolean = false;

  constructor(public globals: ThemeOptions, private userService: UserService, private authService: AuthService) {
  }

  ngOnInit() {
    let currentUser = this.userService.getCurrentUser();
    this.email = currentUser.email;
    this.parent = currentUser.role == UserRole.Parent;
    this.moderator = currentUser.role == UserRole.Moderator;
  }
  
  public resetData() {
    this.userService.resetData();
  }

  public signout() {
    this.authService.logout();
  }
}
