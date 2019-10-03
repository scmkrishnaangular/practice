import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplestaggerComponent } from './samplestagger.component';

describe('SamplestaggerComponent', () => {
  let component: SamplestaggerComponent;
  let fixture: ComponentFixture<SamplestaggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplestaggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplestaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
