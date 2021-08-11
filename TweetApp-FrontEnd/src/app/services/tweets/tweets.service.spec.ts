import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuardService } from '../auth-guard/auth-guard.service';

import { TweetsService } from './tweets.service';

describe('TweetsService', () => {
  let service: TweetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [TweetsService],});
  });

 

  beforeEach(() => {
    service = TestBed.inject(TweetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
