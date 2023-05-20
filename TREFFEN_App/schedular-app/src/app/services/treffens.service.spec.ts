import { TestBed } from '@angular/core/testing';

import { TreffensService } from './treffens.service';

describe('TreffensService', () => {
  let service: TreffensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreffensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
