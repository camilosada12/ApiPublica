import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAlbumsComponent } from './formulario-albums.component';

describe('FormularioAlbumsComponent', () => {
  let component: FormularioAlbumsComponent;
  let fixture: ComponentFixture<FormularioAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioAlbumsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
