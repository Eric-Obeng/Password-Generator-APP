import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPasswordComponent } from './display-password.component';

describe('DisplayPasswordComponent', () => {
  let component: DisplayPasswordComponent;
  let fixture: ComponentFixture<DisplayPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
