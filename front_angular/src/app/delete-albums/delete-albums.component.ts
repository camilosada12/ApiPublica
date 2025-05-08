import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { AlbumsService } from '../albumsServices/albums.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-albums',
  imports: [],
  templateUrl: './delete-albums.component.html',
  styleUrl: './delete-albums.component.css'
})
export class DeleteAlbumsComponent  implements OnInit {

  @Input({ transform: numberAttribute }) id!: number;

  private readonly servicio = inject(AlbumsService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    if (this.id) {
      this.servicio.Delete(this.id).subscribe({
        next: () => {
          alert('Albums eliminado correctamente');
          this.router.navigate(['Albums']);
        },
        error: (err) => {
          console.error('Error al eliminar el Albums', err);
          alert('Error al eliminar el usuario');
          this.router.navigate(['Albums']);
        }
      });
    } else {
      alert('ID de Albums no proporcionado');
      this.router.navigate(['Albums']);
    }
  }
}
