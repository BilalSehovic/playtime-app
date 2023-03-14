import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activity } from '../../models/activity/activity';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  public activity: Activity = new Activity();
  public toastVisible: boolean = false;
  public toastMessage: string = 'Nije unijeto naziv ili opis ili starosna dob.';
  private id: number = 0;

  public ageFrom: number
  public ageTo: number;
  public link: string;

  constructor(private activityService: ActivityService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
       let activity = this.activityService.getActivities(this.id)[0];
       this.activity = activity;
       this.ageFrom = activity.ageGroup[0];
       this.ageTo = activity.ageGroup[1];
       this.link = activity.links[0];
    });
   
    sub.unsubscribe();
  }

  public add() {
    if (!this.activity.name || !this.activity.description || !this.ageFrom || !this.ageTo) {
      this.toastVisible = true;
      return;
    } else {
      this.toastVisible = false;
    }

    this.activity.ageGroup = [this.ageFrom, this.ageTo];
    this.activity.links = [this.link];
    this.activityService.addActivity(this.activity);
  }
}
