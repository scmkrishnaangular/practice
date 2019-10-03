import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablesampleComponent } from './datatablesample.component';

describe('DatatablesampleComponent', () => {
  let component: DatatablesampleComponent;
  let fixture: ComponentFixture<DatatablesampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatablesampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablesampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
