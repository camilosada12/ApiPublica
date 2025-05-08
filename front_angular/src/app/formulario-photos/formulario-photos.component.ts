import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { PhotosService } from '../photosServices/photos.service';
import { phone_modelos } from '../Modelos/User_modelos';

@Component({
  selector: 'app-formulario-photos',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './formulario-photos.component.html',
  styleUrl: './formulario-photos.component.css'
})
export class FormularioPhotosComponent implements OnInit {

  private form = inject(FormBuilder)
  private services = inject(PhotosService)

  @Input() titulo!: string;
  @Input() modelo?: phone_modelos;

  @Output() posteoFormulario = new EventEmitter<phone_modelos>

  FormPhone = this.form.group({
    title: [""],
    url: [""],
    thumbnailUrl: [""]
  })

  ngOnInit(): void {
    if (this.modelo) {
      this.FormPhone.patchValue(this.modelo)
    }
  }

  GuardarCambiosPhotos() {
    let comentario = this.FormPhone.value as phone_modelos
    this.posteoFormulario.emit(comentario);
    console.log(comentario)
  }

}
