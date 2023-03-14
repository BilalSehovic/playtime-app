import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Review } from 'src/app/models/activity/review';
import { ActivityService } from 'src/app/services/activity.service';
import { UserService } from '../../services/user.service';
import { Activity } from '../../models/activity/activity';
import { UserRole } from 'src/app/models/user-role.enum';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  public activities: Activity[] = [];
  public keywords: string[] = [];
  public selectedKeywords: string[] = [];

  public buttonReview: boolean = true;
  public buttonEdit: boolean = true;
  public buttonOpen: boolean = true;

  public heading = 'Aktivnosti';
  public subheading = 'Pregled svih aktivnosti uz mogućnost filtriranja.';
  public icon = 'pe-7s-way icon-gradient bg-sunny-morning';
  public addNewLink = '/activity';

  public faStar = faStar;

  constructor(private activityService: ActivityService, private userService: UserService) { }

  ngOnInit(): void {
    this.activities = this.activityService.getActivities();
    this.keywords = this.activityService.getKeywords();
    this.buttonReview = this.userService.getCurrentUser().role == UserRole.Parent;
    this.buttonEdit = this.userService.getCurrentUser().role == UserRole.Moderator;
  }

  public getAverageRating(reviews: Review[]) {
    let arr = reviews.length ? reviews.map(e => e.rating) : [5];
    let average = arr.reduce((a, b) => a + b, 0) / arr.length;
    return average;
  }

  public toggleKeywordSelection(keyword) {
    let i = this.selectedKeywords.indexOf(keyword);
    (i == -1) ? this.selectedKeywords.push(keyword) : this.selectedKeywords.splice(i, 1);
  }

  public keywordSelected(keyword: string) {
    this.selectedKeywords.includes(keyword);
  }
}