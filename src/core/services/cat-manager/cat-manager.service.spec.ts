import { TestBed } from '@angular/core/testing';

import { CatManagerService } from './cat-manager.service';

describe('CatManagerService', () => {
  let service: CatManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
