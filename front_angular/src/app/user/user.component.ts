import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UserService } from '../Userservices/user.service';
import { User_modelos } from '../Modelos/User_modelos';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-user',
  imports: [MatTableModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent implements OnInit {
  model !: User_modelos[];

  displayedColumns: string[] = ['position', 'Title', 'body', 'acciones'];
  dataSource = this.model;

  servicesUser = inject(UserService)

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.servicesUser.GetAll().subscribe({
      next: (data) => {
        this.model = data;
        // console.log(this.model)
      }
    });
  }
}
