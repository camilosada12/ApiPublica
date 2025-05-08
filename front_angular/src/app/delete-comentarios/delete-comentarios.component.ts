import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { ComentariosService } from '../comentariosServices/comentarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-comentarios',
  imports: [],
  templateUrl: './delete-comentarios.component.html',
  styleUrl: './delete-comentarios.component.css'
})
export class DeleteComentariosComponent implements OnInit{

  @Input({ transform: numberAttribute }) id!: number;

  private readonly servicio = inject(ComentariosService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    if (this.id) {
      this.servicio.Delete(this.id).subscribe({
        next: () => {
          alert('comentario eliminado correctamente');
          this.router.navigate(['comentarios']);
        },
        error: (err) => {
          console.error('Error al eliminar el comentario', err);
          alert('Error al eliminar el comentario');
          this.router.navigate(['comentarios']);
        }
      });
    } else {
      alert('ID de comentario no proporcionado');
      this.router.navigate(['comentario']);
    }
  }
}
