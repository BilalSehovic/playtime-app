import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../models/activity/activity';
import { Review } from '../models/activity/review';
import { LocalStorageService } from './local-storage.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private localStorageService: LocalStorageService, private userService: UserService, private router: Router) {}

  public getActivities(id?: number): Activity[] {
    let activities = this.localStorageService.getItem('activities') as Activity[] ?? [];
    activities = id ? activities.filter(e => e.id == id) : activities;
    return activities;
  }

  public addActivity(activity: Activity): void {
    var activities = this.getActivities();
    activity.id = Math.max(...activities.map(e => e.id)) + 1;
    activity.id = (activity.id == -Infinity) ? 1 : activity.id;
    activities.push(activity);
    this.localStorageService.setItem('activities', activities);
    this.router.navigate(['/activities']);
  }

  public addReview(review: Review): void {
    review.addedBy = this.userService.getCurrentUser().email;
    var activities = this.getActivities();
    let i = activities.findIndex(e => e.id == review.activityId);
    if (i > -1) {
      review.id = Math.max(...activities[i].reviews.map(e => e.id)) + 1;
      review.id = (review.id == -Infinity) ? 1 : review.id;
      activities[i].reviews.push(review);
      this.localStorageService.setItem('activities', activities);
      this.router.navigate(['/activities']);
    }
  }
}