import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumsComponent } from '../albums/albums.component';
import { albums_modelos } from '../Modelos/User_modelos';
import { FormularioAlbumsComponent } from '../formulario-albums/formulario-albums.component';
import { AlbumsService } from '../albumsServices/albums.service';

@Component({
  selector: 'app-create-albums',
  imports: [FormularioAlbumsComponent],
  templateUrl: './create-albums.component.html',
  styleUrl: './create-albums.component.css'
})
export class CreateAlbumsComponent {
  
  router = inject(Router);
  servicio = inject(AlbumsService);

  GuardarCambiosAlbums(albums: albums_modelos) {
      this.servicio.Create(albums).subscribe(()=>{
        alert("albums creada")
        this.router.navigate(['Albums'])
      })
  }
}
