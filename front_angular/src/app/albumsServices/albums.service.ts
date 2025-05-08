import { Injectable } from '@angular/core';
import { albums_modelos } from '../Modelos/User_modelos';
import { GenericService } from '../generic/generic.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService  extends GenericService<albums_modelos, albums_modelos>{

  constructor() { 
    super('albums')
  }
}
