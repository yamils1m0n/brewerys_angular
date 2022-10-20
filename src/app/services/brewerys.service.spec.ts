import { TestBed } from '@angular/core/testing';

import { BrewerysService } from './brewerys.service';

describe('BrewerysService', () => {
  let service: BrewerysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrewerysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
