import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotosService } from '../photosServices/photos.service';

@Component({
  selector: 'app-delete-photos',
  imports: [],
  templateUrl: './delete-photos.component.html',
  styleUrl: './delete-photos.component.css'
})
export class DeletePhotosComponent implements OnInit {

  @Input({ transform: numberAttribute }) id!: number;

  private readonly servicio = inject(PhotosService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    if (this.id) {
      this.servicio.Delete(this.id).subscribe({
        next: () => {
          alert('photos eliminado correctamente');
          this.router.navigate(['photos']);
        },
        error: (err) => {
          console.error('Error al eliminar el photos', err);
          alert('Error al eliminar el photos');
          this.router.navigate(['photos']);
        }
      });
    } else {
      alert('ID de comentario no proporcionado');
      this.router.navigate(['photos']);
    }
  }

}
