import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { UserService } from '../Userservices/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  template: '', // sin HTML
  styleUrl: './delete-user.component.css'
})
export class DeleteUserComponent implements OnInit {

  @Input({ transform: numberAttribute }) id!: number;

  private readonly servicio = inject(UserService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    if (this.id) {
      this.servicio.Delete(this.id).subscribe({
        next: () => {
          alert('Usuario eliminado correctamente');
          this.router.navigate(['user']);
        },
        error: (err) => {
          console.error('Error al eliminar el usuario', err);
          alert('Error al eliminar el usuario');
          this.router.navigate(['user']);
        }
      });
    } else {
      alert('ID de usuario no proporcionado');
      this.router.navigate(['user']);
    }
  }

}
