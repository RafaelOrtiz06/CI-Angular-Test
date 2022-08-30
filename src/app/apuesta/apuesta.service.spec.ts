/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { ApuestaService } from './apuesta.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Apuesta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApuestaService]
    });
  });

  it('should ...', inject([ApuestaService], (service: ApuestaService) => {
    expect(service).toBeTruthy();
  }));
});
