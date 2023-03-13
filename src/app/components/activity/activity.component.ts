import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Child } from '../../models/child';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.sass']
})
export class ActivityComponent implements OnInit {
  public child: Child = new Child();
  public toastVisible: boolean = false;
  public toastMessage: string = 'Nije unijeto ime ili godine ili interesi.';
  private id: number = 0;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id);

      // In a real app: dispatch action to load the details here.
    });
   
    sub.unsubscribe();
  }

  public addChild() {
    if (!this.child.name || !this.child.age || this.child.interests?.length == 0) {
      this.toastVisible = true;
      return;
    } else {
      this.toastVisible = false;
    }
    
    this.userService.addChild(this.child);
  }
}
