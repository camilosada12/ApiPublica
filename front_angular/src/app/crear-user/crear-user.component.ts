import { Component, inject } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { Router } from '@angular/router';
import { UserService } from '../Userservices/user.service';
import { User_modelos } from '../Modelos/User_modelos';


@Component({
  selector: 'app-crear-user',
  imports: [FormularioComponent],
  templateUrl: './crear-user.component.html',
  styleUrl: './crear-user.component.css'
})
export class CrearUserComponent {
  router = inject(Router);
  servicio = inject(UserService);

  GuardarCambios(user: User_modelos) {
      this.servicio.Create(user).subscribe(()=>{
        alert("usuario creada")
        this.router.navigate(['user'])
      })


  }
}
