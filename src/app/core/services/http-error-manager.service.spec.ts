import { TestBed } from '@angular/core/testing';

import { HttpErrorManagerService } from './http-error-manager.service';

describe('HttpErrorManagerService', () => {
  let service: HttpErrorManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpErrorManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
