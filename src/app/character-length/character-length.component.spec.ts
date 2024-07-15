import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterLengthComponent } from './character-length.component';

describe('CharacterLengthComponent', () => {
  let component: CharacterLengthComponent;
  let fixture: ComponentFixture<CharacterLengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterLengthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
