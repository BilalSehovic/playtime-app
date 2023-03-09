import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-register-boxed',
  templateUrl: './register-boxed.component.html',
  styles: []
})
export class RegisterBoxedComponent implements OnInit {
  @ViewChild(NgbToast) toast!: NgbToast;

  public user: User = new User();
  public passwordMatch: string = '';
  public terms: boolean = false;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public register() {
    debugger;
    if ((this.user.password != this.passwordMatch) || !this.terms) {
      this.toast.show();
      return;
    } else {
      this.toast.hide();
    }

    this.authService.register(this.user);
  }
}
