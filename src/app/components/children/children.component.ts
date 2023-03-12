import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  public children = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.children = this.userService.getCurrentUser().children;
  }

}
