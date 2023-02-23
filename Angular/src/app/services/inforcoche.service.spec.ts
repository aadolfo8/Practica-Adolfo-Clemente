import { TestBed } from '@angular/core/testing';

import { InforCocheService } from './inforcoche.service';

describe('InforCocheService', () => {
  let service: InforCocheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InforCocheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
