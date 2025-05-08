import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { phone_modelos } from '../Modelos/User_modelos';
import { PhotosService } from '../photosServices/photos.service';

@Component({
  selector: 'app-photos',
  imports: [MatTableModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent implements OnInit {

  model !: phone_modelos[];

  displayedColumns: string[] = ['position', 'Title', 'url', 'thumbnailUrl', 'acciones'];
  dataSource = this.model;

  servicesPhotos = inject(PhotosService)

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.servicesPhotos.GetAll().subscribe({
      next: (data) => {
        this.model = data.slice(0,50).map(photo => {
          const id = photo.id;
          return {
            ...photo,
            // crea una nueva url con picsum usando el id para variar la imagen
            url: `https://picsum.photos/id/${id}/200/200`,
            thumbnailUrl: `https://picsum.photos/id/${id}/100/100`
          };
        });
      }
    });
  }
}
