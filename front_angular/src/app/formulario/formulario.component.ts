import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../Userservices/user.service';

import { Title } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User_modelos } from '../Modelos/User_modelos';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink,CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  private form = inject(FormBuilder)
  private services = inject(UserService)

  @Input() titulo!: string;
  @Input() modelo?: User_modelos;

  @Output() posteoFormulario = new EventEmitter<User_modelos>

  FormUser = this.form.group({
    title: [""],
    body: [""]
  })

  ngOnInit(): void {
    if (this.modelo) {
      this.FormUser.patchValue(this.modelo)
    }
  }

  GuardarCambios(){
    let User = this.FormUser.value as User_modelos
    this.posteoFormulario.emit(User);
    console.log(User)
  }
}
