import { Injectable } from "@angular/core";
import { Observable, delay, mergeMap, of, pipe } from "rxjs";
import { Usuarios } from "./models";
import { HttpClient } from "@angular/common/http";

const ROLES_DB: string[] = ['ADMIN','USER'];

let USERS_DB: Usuarios[] = [   
      
       
]; 



@Injectable()
export class UsuariosService {
  constructor(private httpClient: HttpClient){}
    usuarios : Usuarios[]=[];

    getUsuarios(): Observable<Usuarios[]>{
      return this.httpClient.get<Usuarios[]>('http://localhost:3000/Usuarios');       
    }
     
    createUsuarios(payload: Usuarios){
      return this.httpClient.post<Usuarios>('http://localhost:3000/Usuarios', payload).pipe(mergeMap(() => this.getUsuarios()));
    }

    deleteUsuario(userId: string){
      
      return this.httpClient.delete<Usuarios>('http://localhost:3000/Usuarios/' + userId);
    }

    detalleUsuario(userId: string){
      
      return this.httpClient.get<Usuarios>('http://localhost:3000/Usuarios/' + userId);
    }

    updateUsuario(id:string,usuario: Usuarios):Observable<Usuarios>{      
      return this.httpClient.put<Usuarios>('http://localhost:3000/Usuarios/'  + id, usuario);
    }
}