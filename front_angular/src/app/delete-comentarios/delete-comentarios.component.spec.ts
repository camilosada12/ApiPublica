import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComentariosComponent } from './delete-comentarios.component';

describe('DeleteComentariosComponent', () => {
  let component: DeleteComentariosComponent;
  let fixture: ComponentFixture<DeleteComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteComentariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
