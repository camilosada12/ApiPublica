import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePhotosComponent } from './update-photos.component';

describe('UpdatePhotosComponent', () => {
  let component: UpdatePhotosComponent;
  let fixture: ComponentFixture<UpdatePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePhotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
