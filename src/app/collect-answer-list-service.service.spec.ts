import { TestBed, inject } from '@angular/core/testing';

import { CollectAnswerListServiceService } from './collect-answer-list-service.service';

describe('CollectAnswerListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectAnswerListServiceService]
    });
  });

  it('should be created', inject([CollectAnswerListServiceService], (service: CollectAnswerListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
