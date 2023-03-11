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
  public toastVisible: boolean = false;
  public toastMessage: string = 'Šifre se ne slažu ili uslovi nisu prihvaćeni.';
  
  public user: User = new User();
  public passwordMatch: string = '';
  public terms: boolean = false;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public register() {
    if ((this.user.password != this.passwordMatch) || !this.terms) {
      this.toastVisible = true;
      return;
    } else {
      this.toastVisible = false;
    }

    this.authService.register(this.user);
  }
}
