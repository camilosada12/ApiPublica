import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAlbumsComponent } from './delete-albums.component';

describe('DeleteAlbumsComponent', () => {
  let component: DeleteAlbumsComponent;
  let fixture: ComponentFixture<DeleteAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAlbumsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
