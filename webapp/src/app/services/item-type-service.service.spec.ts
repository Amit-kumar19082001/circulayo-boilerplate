import { TestBed } from '@angular/core/testing';

import { ItemTypeServiceService } from './item-type-service.service';

describe('ItemTypeServiceService', () => {
  let service: ItemTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
