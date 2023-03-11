import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { UserRole } from 'src/app/models/user-role.enum';

@Component({
  selector: 'app-login-boxed',
  templateUrl: './login-boxed.component.html',
  styles: []
})
export class LoginBoxedComponent implements OnInit {
  public user: User = new User();
  public toastVisible: boolean = false;
  public toastMessage: string = 'Pogrešan e-mail ili šifra.';

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  public login(guest: boolean = false) {
    this.toastVisible = false;
    let guestUser = this.getGuestUser();
    var successLogin = this.authService.login(guest ? guestUser : this.user);
    if (successLogin) {
      this.router.navigate(['/']);
    } else {
      this.toastVisible = true;
    }
  }

  private getGuestUser() {
    let guest = new User();
    guest.email = 'guest';
    guest.password = 'guest';
    guest.role = UserRole.Guest;
    return guest;
  }
}
