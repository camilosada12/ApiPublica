import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPhotosComponent } from './formulario-photos.component';

describe('FormularioPhotosComponent', () => {
  let component: FormularioPhotosComponent;
  let fixture: ComponentFixture<FormularioPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPhotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
