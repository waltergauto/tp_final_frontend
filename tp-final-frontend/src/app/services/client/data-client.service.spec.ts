import { TestBed } from '@angular/core/testing';

import { DataClientService } from './data-client.service';

describe('DataClientService', () => {
  let service: DataClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
