import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComentariosComponent } from './update-comentarios.component';

describe('UpdateComentariosComponent', () => {
  let component: UpdateComentariosComponent;
  let fixture: ComponentFixture<UpdateComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateComentariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
