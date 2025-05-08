import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { UserService } from '../Userservices/user.service';
import { Router } from '@angular/router';
import {  User_modelos } from '../Modelos/User_modelos';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-update-person',
  imports: [FormularioComponent],
  templateUrl: './update-person.component.html',
  styleUrl: './update-person.component.css'
})
export class UpdatePersonComponent implements OnInit{
   
  @Input({transform: numberAttribute}) id!:number;

  private readonly servicio = inject(UserService)
  private readonly router = inject(Router)
  
  modelo?: User_modelos;
  
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
  
  GuardarCambios(entidad :  User_modelos) : void{
      if(this.modelo){
        entidad.id = this.modelo.id;
      }

      
  this.servicio.Update(entidad).subscribe(()=>{
    this.router.navigate(['user'])
  })
  }

}
