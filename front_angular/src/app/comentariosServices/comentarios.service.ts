import { Injectable } from '@angular/core';
import { comentarios_modelos } from '../Modelos/User_modelos';
import { GenericService } from '../generic/generic.service';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService extends GenericService<comentarios_modelos, comentarios_modelos>  {

  constructor() {
    super("comments")
   }
}
