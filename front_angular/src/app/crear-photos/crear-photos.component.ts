import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PhotosService } from '../photosServices/photos.service';
import { phone_modelos } from '../Modelos/User_modelos';
import { FormularioPhotosComponent } from '../formulario-photos/formulario-photos.component';

@Component({
  selector: 'app-crear-photos',
  imports: [FormularioPhotosComponent],
  templateUrl: './crear-photos.component.html',
  styleUrl: './crear-photos.component.css'
})
export class CrearPhotosComponent {

  router = inject(Router);
  servicio = inject(PhotosService);

  GuardarCambiosPhotos(photos: phone_modelos) {
      this.servicio.Create(photos).subscribe(()=>{
        alert("photos creada")
        this.router.navigate(['photos'])
      })
  }
}
