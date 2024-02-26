import {Injectable} from '@angular/core'
import { Usuarios } from '../dashboard/pages/usuarios/models'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';
import { of, delay,map } from 'rxjs';
import { UsuariosService } from '../dashboard/pages/usuarios/usuarios.service';

interface LoginData {
     email: null | string;
     password: null | string;
}

@Injectable({ providedIn: 'root'})
export class AuthService {

    authUser: Usuarios | null = null
    usuarios: Usuarios[] =[];

    constructor(private router:Router,  private _snackBar: MatSnackBar, private usuariosService: UsuariosService){

        this.usuariosService.getUsuarios().subscribe({
            next: (usuarios) => {
              this.usuarios = usuarios;
            },
        })
    }

   

    login(data: LoginData): void {

       

        const MOCK_USER = {
            id: 48,
            nombres: 'FAKENAME',
            apellidos: 'FAKENAME',
            correo: 'test@mail.com',
            password: '12345',
            rol: 'ADMIN'
        };


        
        if(data.email == MOCK_USER.correo && data.password === MOCK_USER.password){
            this.authUser = MOCK_USER;
            localStorage.setItem('token', 'fdfdsjkfhkdsfhdsfhdsjkfhsdljkfdksfhkdjsfhdsfjkdsfhdjksf');
            this.router.navigate(['dashboard', 'home']);
        }
        else{
            this.mostrarAlerta("email o password no son correctos","ERROR!");
        }
        

        
        
    }

    logout(): void {
        this.authUser = null;
        this.router.navigate(['auth', 'login']);
        localStorage.removeItem('token');
    }

    mostrarAlerta(msg: string, accion: string) {
        this._snackBar.open(msg, accion,{
          horizontalPosition:"end",
          verticalPosition:"top",
          duration: 3000
        });
      }

      verificarToken(){
        return of(localStorage.getItem('token')).pipe(delay(1000), map((response)=>
        !!response
        ))
      } 
}
