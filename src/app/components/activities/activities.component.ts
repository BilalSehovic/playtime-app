import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { Activity } from '../../models/activity/activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  public activities: Activity[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activities = this.activityService.getActivities();
  }

}