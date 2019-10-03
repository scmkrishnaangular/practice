import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample3keyframesComponent } from './sample3keyframes.component';

describe('Sample3keyframesComponent', () => {
  let component: Sample3keyframesComponent;
  let fixture: ComponentFixture<Sample3keyframesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sample3keyframesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sample3keyframesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
