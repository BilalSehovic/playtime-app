import { Component, OnInit } from '@angular/core';
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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
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
