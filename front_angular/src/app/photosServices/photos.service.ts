import { Injectable } from '@angular/core';
import { phone_modelos } from '../Modelos/User_modelos';
import { GenericService } from '../generic/generic.service';

@Injectable({
  providedIn: 'root'
})
export class PhotosService extends GenericService<phone_modelos, phone_modelos> {

  constructor() {
    super("photos")
   }
}
