import { TestBed } from '@angular/core/testing';

import { FbserService } from './fbser.service';

describe('FbserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FbserService = TestBed.get(FbserService);
    expect(service).toBeTruthy();
  });
});
