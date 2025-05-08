import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { ComentariosService } from '../comentariosServices/comentarios.service';
import { Router } from '@angular/router';
import { comentarios_modelos } from '../Modelos/User_modelos';
import { ComentariosFormComponent } from '../formularioComentarios/comentarios-form/comentarios-form.component';

@Component({
  selector: 'app-update-comentarios',
  imports: [ComentariosFormComponent],
  templateUrl: './update-comentarios.component.html',
  styleUrl: './update-comentarios.component.css'
})
export class UpdateComentariosComponent implements OnInit{
  
  @Input({transform: numberAttribute}) id!:number;

  private readonly servicio = inject(ComentariosService)
  private readonly router = inject(Router)

  modelo?: comentarios_modelos;
    
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

    GuardarCambiosComentarios(entidad :  comentarios_modelos) : void{
          if(this.modelo){
            entidad.id = this.modelo.id;
          }
    
          
      this.servicio.Update(entidad).subscribe(()=>{
        this.router.navigate(['comentarios'])
      })
      }
}
