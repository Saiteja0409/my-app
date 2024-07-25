import { TestBed } from '@angular/core/testing';

import { StudentCardsService } from './student-cards.service';

describe('StudentCardsService', () => {
  let service: StudentCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
