import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { AlbumsService } from '../albumsServices/albums.service';
import { albums_modelos } from '../Modelos/User_modelos';

@Component({
  selector: 'app-formulario-albums',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './formulario-albums.component.html',
  styleUrl: './formulario-albums.component.css'
})
export class FormularioAlbumsComponent implements OnInit{

  private form = inject(FormBuilder)
  private services = inject(AlbumsService)

  @Input() titulo!: string;
  @Input() modelo?: albums_modelos;

  @Output() posteoFormulario = new EventEmitter<albums_modelos>

  FormAlbums = this.form.group({
    title: [""],
  })

  ngOnInit(): void {
    if (this.modelo) {
      this.FormAlbums.patchValue(this.modelo)
    }
  }

  GuardarCambiosComentarios() {
    let comentario = this.FormAlbums.value as albums_modelos
    this.posteoFormulario.emit(comentario);
    console.log(comentario)
  }
}
