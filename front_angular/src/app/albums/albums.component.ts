import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { albums_modelos } from '../Modelos/User_modelos';
import { AlbumsService } from '../albumsServices/albums.service';

@Component({
  selector: 'app-albums',
  imports: [MatTableModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{

  model !: albums_modelos[];

  displayedColumns: string[] = ['position', 'Title','acciones'];
  dataSource = this.model;

  servicesPhotos = inject(AlbumsService)

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.servicesPhotos.GetAll().subscribe({
      next: (data) => {
        this.model = data.slice(0,50)
      }
    });
  }

}
