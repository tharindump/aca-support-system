import { TestBed, inject } from '@angular/core/testing';

import { FindLecturersService } from './find-lecturers.service';

describe('FindLecturersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindLecturersService]
    });
  });

  it('should be created', inject([FindLecturersService], (service: FindLecturersService) => {
    expect(service).toBeTruthy();
  }));
});
