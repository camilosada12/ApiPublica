import { TestBed } from '@angular/core/testing';
import { AlbumsService } from './albums.service';



describe('AlbumsSerService', () => {
  let service: AlbumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
