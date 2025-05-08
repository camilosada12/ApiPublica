import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { comentarios_modelos, User_modelos } from '../Modelos/User_modelos';
import { ComentariosService } from '../comentariosServices/comentarios.service';

@Component({
  selector: 'app-comentarios',
  imports: [MatTableModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent implements OnInit {
  model !: comentarios_modelos[];

  servicesComentarios = inject(ComentariosService)

  displayedColumns: string[] = ['position', 'name', 'email', 'body', 'acciones'];
  dataSource = this.model;


  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.servicesComentarios.GetAll().subscribe({
      next: (data) => {
        this.model = data.slice(0,50);
        // console.log(this.model)
      }
    });
  }
}
