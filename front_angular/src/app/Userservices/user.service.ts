import { Injectable } from '@angular/core';
import { GenericService } from '../generic/generic.service';
import { User_modelos } from '../Modelos/User_modelos';


@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService<User_modelos, User_modelos> {

  constructor() { 
    super("posts")
  }
}
