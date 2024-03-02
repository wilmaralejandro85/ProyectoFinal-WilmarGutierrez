import {Injectable} from '@angular/core'
import { Usuarios } from '../dashboard/pages/usuarios/models'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';
import { of, delay,map } from 'rxjs';
import { UsuariosService } from '../dashboard/pages/usuarios/usuarios.service';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../core/store/auth/actions';

interface LoginData {
     email: null | string;
     password: null | string;
}

@Injectable({ providedIn: 'root'})
export class AuthService {

    authUser: Usuarios | null = null
    usuarios: Usuarios[] =[];
    usuarios2: Usuarios[] =[];

    constructor(private router:Router,  private _snackBar: MatSnackBar, private usuariosService: UsuariosService, private store: Store){



        this.usuariosService.getUsuarios().subscribe({
            next: (usuarios) => {
              this.usuarios = usuarios;
              
            },
        })
        
    }


    private setAuthUser(user: Usuarios): void {
      this.authUser = user;
      console.log('usuario logueado 1',this.authUser);
      this.store.dispatch(AuthActions.setAuthUser({user}));

    }

    login(data: LoginData): void {

        const dataSourceFiltered = this.usuarios.filter(us => us.correo == data.email && us.password == data.password)
        this.usuarios2 = [...dataSourceFiltered];
        console.log("usuarios: ", this.usuarios);
        console.log(this.usuarios2);
       
        
        if(data.email == this.usuarios2[0].correo && data.password === this.usuarios2[0].password){
            this.authUser = this.usuarios2[0];
            this.setAuthUser(this.usuarios2[0]);
           
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
