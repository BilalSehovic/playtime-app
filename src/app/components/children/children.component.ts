import { Component, OnInit } from '@angular/core';
import { Child } from '../../models/child';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  public children: Child[] = [];

  public heading = 'Pregled Djece';
  public subheading = 'Pregled sve unijete djece i njihovih osobina na jednom mjestu.';
  public icon = 'pe-7s-users icon-gradient bg-sunny-morning';
  public addNewLink = '/child';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.children = this.userService.getCurrentUser().children;
  }

}
