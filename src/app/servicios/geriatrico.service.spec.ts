import { TestBed } from '@angular/core/testing';

import { GeriatricoService } from './geriatrico.service';

describe('GeriatricoService', () => {
  let service: GeriatricoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeriatricoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
