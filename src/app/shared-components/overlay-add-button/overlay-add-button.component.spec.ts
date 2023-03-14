import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayAddButtonComponent } from './overlay-add-button.component';

describe('OverlayAddButtonComponent', () => {
  let component: OverlayAddButtonComponent;
  let fixture: ComponentFixture<OverlayAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayAddButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
