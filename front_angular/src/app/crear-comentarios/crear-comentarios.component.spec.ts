import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearComentariosComponent } from './crear-comentarios.component';

describe('CrearComentariosComponent', () => {
  let component: CrearComentariosComponent;
  let fixture: ComponentFixture<CrearComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearComentariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
