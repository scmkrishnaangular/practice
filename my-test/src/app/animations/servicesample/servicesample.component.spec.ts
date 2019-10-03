import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesampleComponent } from './servicesample.component';

describe('ServicesampleComponent', () => {
  let component: ServicesampleComponent;
  let fixture: ComponentFixture<ServicesampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
