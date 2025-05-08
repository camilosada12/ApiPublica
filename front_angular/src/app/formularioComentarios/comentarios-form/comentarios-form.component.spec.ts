import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosFormComponent } from './comentarios-form.component';

describe('ComentariosFormComponent', () => {
  let component: ComentariosFormComponent;
  let fixture: ComponentFixture<ComentariosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentariosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentariosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
