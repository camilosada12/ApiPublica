import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { AlbumsComponent } from '../albums/albums.component';
import { Router } from '@angular/router';
import { albums_modelos } from '../Modelos/User_modelos';
import { AlbumsService } from '../albumsServices/albums.service';
import { FormularioAlbumsComponent } from '../formulario-albums/formulario-albums.component';

@Component({
  selector: 'app-update-albums',
  imports: [FormularioAlbumsComponent],
  templateUrl: './update-albums.component.html',
  styleUrl: './update-albums.component.css'
})
export class UpdateAlbumsComponent implements OnInit {

  @Input({ transform: numberAttribute }) id!: number;

  private readonly servicio = inject(AlbumsService)
  private readonly router = inject(Router)

  modelo?: albums_modelos;

  ngOnInit(): void {
    // if(this.modelo){
    console.log(this.modelo)
    this.servicio.GetById(this.id).subscribe({
      next: (data) => {
        this.modelo = data
      }
    })
    // }
  }

  GuardarCambiosAlbums(entidad: albums_modelos): void {
    if (this.modelo) {
      entidad.id = this.modelo.id;
    }


    this.servicio.Update(entidad).subscribe(() => {
      this.router.navigate(['Albums'])
    })
  }
}
