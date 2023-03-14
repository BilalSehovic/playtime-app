import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../models/activity/review';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.sass']
})
export class ReviewComponent implements OnInit {
  public review: Review = new Review();
  public toastVisible: boolean = false;
  public toastMessage: string = 'Nije unijeta ocjena ili opis.';
  private activityid: number = 0;

  constructor(private activityService: ActivityService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let sub = this.route.params.subscribe(params => {
      this.activityid = +params['activityid']; // (+) converts string 'id' to a number
      this.review.rating = undefined;
      this.review.activityId = this.activityid;
    });
   
    sub.unsubscribe();
  }

  public add() {
    if (!this.review.rating || !this.review.description) {
      this.toastVisible = true;
      return;
    } else {
      this.toastVisible = false;
    }
    
    this.activityService.addReview(this.review);
  }
}
