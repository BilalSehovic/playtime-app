import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../../../../services/auth.service';
import {ThemeOptions} from '../../../../../theme-options';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
})
export class UserBoxComponent implements OnInit {
  public email: string = '';

  constructor(public globals: ThemeOptions, private authService: AuthService) {
  }

  ngOnInit() {
    this.email = this.authService.getCurrentUser().email;
  }
  
  public signout() {
    this.authService.logout();
  }
}
