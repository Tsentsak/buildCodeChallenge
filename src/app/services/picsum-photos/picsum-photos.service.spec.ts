import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { PicsumPhotosService } from './picsum-photos.service';

describe('PicsumPhotosService', () => {
  let service: PicsumPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PicsumPhotosService]
  });
    service = TestBed.inject(PicsumPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getPhotos function', () => {
    expect(service.getPhotos).toBeTruthy();
   });
});
