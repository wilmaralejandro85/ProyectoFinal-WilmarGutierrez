import { Component } from '@angular/core';
import { Usuarios } from './models';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {
  displayedColumns: string[] = ['id', 'nombres', 'apellidos', 'correo', 'password','rol'];
  dataSource : Usuarios[]=[
  {
    id: 1,
    nombres: 'Wilmar',
    apellidos: 'Gutierrez',
    correo: 'wilmar@email.com',
    password: '12345',
    rol: 'ADMIN'
  },
  {
    id: 2,
    nombres: 'Carlos',
    apellidos: 'Arango',
    correo: 'carlos@email.com',
    password: '54321',
    rol: 'USER'
  }

  ];
}
