import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ComentariosService } from '../comentariosServices/comentarios.service';
import { comentarios_modelos } from '../Modelos/User_modelos';
import { ComentariosFormComponent } from '../formularioComentarios/comentarios-form/comentarios-form.component';

@Component({
  selector: 'app-crear-comentarios',
  imports: [ComentariosFormComponent],
  templateUrl: './crear-comentarios.component.html',
  styleUrls: ['./crear-comentarios.component.css'] 
})
export class CrearComentariosComponent {
  router = inject(Router);
  servicio = inject(ComentariosService);

  GuardarCambiosComentarios(comentarios: comentarios_modelos) {
    this.servicio.Create(comentarios).subscribe(() => {
      alert("comentarios creada")
      this.router.navigate(['comentarios'])
    })
  }
}
