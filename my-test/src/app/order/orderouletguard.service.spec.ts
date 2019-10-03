import { TestBed } from '@angular/core/testing';

import { OrderouletguardService } from './orderouletguard.service';

describe('OrderouletguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderouletguardService = TestBed.get(OrderouletguardService);
    expect(service).toBeTruthy();
  });
});
