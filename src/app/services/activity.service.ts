import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../models/activity/activity';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  public getActivities(id?: number): Activity[] {
    let activities = this.localStorageService.getItem('activities') as Activity[] ?? [];
    activities = id ? activities.filter(e => e.id == id) : activities;
    return activities;
  }

  public addActivity(activity: Activity): void {
    var activities = this.localStorageService.getItem('activities') as Activity[];
    activities.push(activity);
    this.localStorageService.setItem('activities', activities);
    this.router.navigate(['/activities']);
  }
}