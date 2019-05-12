import { TestBed } from '@angular/core/testing';

import { MovedHistoryService } from './moved-history.service';

describe('MovedHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovedHistoryService = TestBed.get(MovedHistoryService);
    expect(service).toBeTruthy();
  });
});
