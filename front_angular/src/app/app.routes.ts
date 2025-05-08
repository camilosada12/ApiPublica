import { Routes } from '@angular/router';
import { UserService } from './Userservices/user.service';
import { UserComponent } from './user/user.component';
import { CrearUserComponent } from './crear-user/crear-user.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

export const routes: Routes = [
    {path: 'user', component: UserComponent},
    {path: 'user/create' , component : CrearUserComponent},
    {path: 'user/update/:id' , component : UpdatePersonComponent},
    {path: 'user/delete/:id' , component : DeleteUserComponent}
];
