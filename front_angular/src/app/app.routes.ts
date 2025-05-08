import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CrearUserComponent } from './crear-user/crear-user.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { CrearComentariosComponent } from './crear-comentarios/crear-comentarios.component';
import { PhotosComponent } from './photos/photos.component';
import { UpdatePhotosComponent } from './update-photos/update-photos.component';
import { DeletePhotosComponent } from './delete-photos/delete-photos.component';
import { UpdateComentariosComponent } from './update-comentarios/update-comentarios.component';
import { DeleteComentariosComponent } from './delete-comentarios/delete-comentarios.component';
import { CrearPhotosComponent } from './crear-photos/crear-photos.component';
import { AlbumsComponent } from './albums/albums.component';
import { CreateAlbumsComponent } from './create-albums/create-albums.component';
import { UpdateAlbumsComponent } from './update-albums/update-albums.component';
import { DeleteAlbumsComponent } from './delete-albums/delete-albums.component';

export const routes: Routes = [
    {path: 'user', component: UserComponent},
    {path: 'user/create' , component : CrearUserComponent},
    {path: 'user/update/:id' , component : UpdatePersonComponent},
    {path: 'user/delete/:id' , component : DeleteUserComponent},

    {path: 'comentarios', component: ComentariosComponent},
    {path: 'comentarios/create', component: CrearComentariosComponent},
    {path: 'comentarios/update/:id' , component : UpdateComentariosComponent},
    {path: 'comentarios/delete/:id' , component : DeleteComentariosComponent},

    {path: 'photos', component: PhotosComponent},
    {path: 'photos/create', component: CrearPhotosComponent},
    {path: 'photos/update/:id' , component : UpdatePhotosComponent},
    {path: 'photos/delete/:id' , component : DeletePhotosComponent},

    {path: 'Albums', component: AlbumsComponent},
    {path: 'Albums/create', component: CreateAlbumsComponent},
    {path: 'Albums/update/:id' , component : UpdateAlbumsComponent},
    {path: 'Albums/delete/:id' , component : DeleteAlbumsComponent},
];
