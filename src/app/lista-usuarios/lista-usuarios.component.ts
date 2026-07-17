import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-lista-usuarios',
  standalone: false,
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: User[] = [];

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef // INYECTAR DETECTOR DE CAMBIOS
  ) { }

  ngOnInit(): void {
    this.userService.obtenerDatos().subscribe(data => {
      this.usuarios = data;
      this.cdr.detectChanges();
    });
  }
}