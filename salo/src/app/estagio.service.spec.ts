import { TestBed } from '@angular/core/testing';

import { EstagioService } from './estagio.service';

describe('EstagioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstagioService = TestBed.get(EstagioService);
    expect(service).toBeTruthy();
  });
});
