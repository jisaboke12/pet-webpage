import { TestBed } from '@angular/core/testing';

import { PetParadigmService } from './pet-paradigm.service';

describe('PetParadigmService', () => {
  let service: PetParadigmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetParadigmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
