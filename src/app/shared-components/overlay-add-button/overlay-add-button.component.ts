import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay-add-button',
  templateUrl: './overlay-add-button.component.html',
  styleUrls: ['./overlay-add-button.component.css']
})
export class OverlayAddButtonComponent implements OnInit {

  @Input() link: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
