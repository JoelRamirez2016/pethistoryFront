import { TestBed } from '@angular/core/testing';

import { DetallesHcService } from './detalles-hc.service';

describe('DetallesHcService', () => {
  let service: DetallesHcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesHcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
