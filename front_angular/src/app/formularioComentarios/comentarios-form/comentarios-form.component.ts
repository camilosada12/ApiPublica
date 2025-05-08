import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ComentariosService } from '../../comentariosServices/comentarios.service';
import { comentarios_modelos } from '../../Modelos/User_modelos';

@Component({
  selector: 'app-comentarios-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './comentarios-form.component.html',
  styleUrl: './comentarios-form.component.css'
})
export class ComentariosFormComponent implements OnInit {

  private form = inject(FormBuilder)
  private services = inject(ComentariosService)

  @Input() titulo!: string;
  @Input() modelo?: comentarios_modelos;

  @Output() posteoFormulario = new EventEmitter<comentarios_modelos>

  FormComentarios = this.form.group({
    name: [""],
    email: [""],
    body: [""]
  })

  ngOnInit(): void {
    if (this.modelo) {
      this.FormComentarios.patchValue(this.modelo)
    }
  }

  GuardarCambiosComentarios() {
    let comentario = this.FormComentarios.value as comentarios_modelos
    this.posteoFormulario.emit(comentario);
    console.log(comentario)
  }

}
