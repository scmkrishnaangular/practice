import { TestBed } from '@angular/core/testing';

import { UserserService } from './userser.service';

describe('UserserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserserService = TestBed.get(UserserService);
    expect(service).toBeTruthy();
  });
});
