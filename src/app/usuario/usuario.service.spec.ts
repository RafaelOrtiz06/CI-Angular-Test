/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { UsuarioService } from './usuario.service';

describe('Service: Usuario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioService, HttpClientModule]
    });
  });

  it('should ...', inject([UsuarioService], (service: UsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
