import { TestBed } from '@angular/core/testing';

import { Gasto } from './gasto.service';

describe('Gasto', () => {
  let service: Gasto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gasto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
