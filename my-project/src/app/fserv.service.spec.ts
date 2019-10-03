import { TestBed } from '@angular/core/testing';

import { FservService } from './fserv.service';

describe('FservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FservService = TestBed.get(FservService);
    expect(service).toBeTruthy();
  });
});
