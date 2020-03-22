import { TestBed } from '@angular/core/testing';

import { AppinitService } from './appinit.service';

describe('AppinitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppinitService = TestBed.get(AppinitService);
    expect(service).toBeTruthy();
  });
});
