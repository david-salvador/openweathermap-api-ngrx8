import { TestBed } from '@angular/core/testing';

import { LibUiService } from './lib-ui.service';

describe('LibUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibUiService = TestBed.get(LibUiService);
    expect(service).toBeTruthy();
  });
});
