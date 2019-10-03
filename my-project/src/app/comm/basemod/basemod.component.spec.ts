import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasemodComponent } from './basemod.component';

describe('BasemodComponent', () => {
  let component: BasemodComponent;
  let fixture: ComponentFixture<BasemodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasemodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasemodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
