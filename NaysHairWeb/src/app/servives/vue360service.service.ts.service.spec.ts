import { TestBed } from '@angular/core/testing';

import { Vue360service.Service.TsService } from './vue360service.service.ts.service';

describe('Vue360service.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Vue360service.Service.TsService = TestBed.get(Vue360service.Service.TsService);
    expect(service).toBeTruthy();
  });
});
