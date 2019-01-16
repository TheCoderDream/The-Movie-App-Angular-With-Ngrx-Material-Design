import { TestBed } from '@angular/core/testing';

import { ThemeServiceService } from './theme-service.service';

describe('ThemeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeServiceService = TestBed.get(ThemeServiceService);
    expect(service).toBeTruthy();
  });
});
