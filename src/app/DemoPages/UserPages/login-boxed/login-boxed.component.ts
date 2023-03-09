import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-boxed',
  templateUrl: './login-boxed.component.html',
  styles: []
})
export class LoginBoxedComponent implements OnInit {
  @ViewChild(NgbToast) toast!: NgbToast;
  public user: User = new User();

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  public login() {
    var successLogin = this.authService.login(this.user);
    if (successLogin) {
      this.router.navigate(['/']);
    } else {
      this.toast.show();
    }
  }
}
