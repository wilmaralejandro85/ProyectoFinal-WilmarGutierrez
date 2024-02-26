import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Usuarios } from "./models";

@Injectable()
export class UsuariosService {

    getUsuarios(){
        return of<Usuarios[]>([
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
        ])
    }
}