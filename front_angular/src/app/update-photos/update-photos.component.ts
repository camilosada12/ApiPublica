import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { PhotosService } from '../photosServices/photos.service';
import { Router } from '@angular/router';
import { phone_modelos } from '../Modelos/User_modelos';
import { FormularioPhotosComponent } from '../formulario-photos/formulario-photos.component';

@Component({
  selector: 'app-update-photos',
  imports: [FormularioPhotosComponent],
  templateUrl: './update-photos.component.html',
  styleUrl: './update-photos.component.css'
})
export class UpdatePhotosComponent implements OnInit{

  @Input({transform: numberAttribute}) id!:number;

  private readonly servicio = inject(PhotosService)
  private readonly router = inject(Router)
  
  modelo?: phone_modelos;
  
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
  
  GuardarCambiosPhotos(entidad :  phone_modelos) : void{
      if(this.modelo){
        entidad.id = this.modelo.id;
      }

      
  this.servicio.Update(entidad).subscribe(()=>{
    this.router.navigate(['photos'])
  })
  }


}
