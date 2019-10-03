import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildmodComponent } from './childmod.component';

describe('ChildmodComponent', () => {
  let component: ChildmodComponent;
  let fixture: ComponentFixture<ChildmodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildmodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
