import { TestBed } from '@angular/core/testing';

import { FandomIndiaService } from './fandom-india.service';

describe('FandomIndiaService', () => {
  let service: FandomIndiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FandomIndiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
