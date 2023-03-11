import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.sass']
})
export class ToastComponent implements OnInit, OnChanges {
  @Input() message: string = '';
  @Input() visible: boolean = false;
  @ViewChild(NgbToast) toast!: NgbToast;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.visible?.currentValue) {
      this.toast?.show();
    } else {
      this.toast?.hide();
    }
  }
}
