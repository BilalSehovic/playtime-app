import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models/activity/activity';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  public activities: Activity[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.activities = this.userService.getCurrentUser().children;
  }

}