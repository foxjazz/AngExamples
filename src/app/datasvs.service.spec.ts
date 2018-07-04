import { TestBed, inject } from '@angular/core/testing';

import { DatasvsService } from './datasvs.service';

describe('DatasvsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatasvsService]
    });
  });

  it('should be created', inject([DatasvsService], (service: DatasvsService) => {
    expect(service).toBeTruthy();
  }));
});
