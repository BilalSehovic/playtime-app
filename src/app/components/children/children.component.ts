import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.sass']
})
export class ChildrenComponent implements OnInit {
  public children = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.children = this.authService.getCurrentUser().children;
  }

}
