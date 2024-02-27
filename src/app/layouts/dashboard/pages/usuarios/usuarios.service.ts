import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Usuarios } from "./models";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UsuariosService {
  constructor(private httpClient: HttpClient){}
    usuarios : Usuarios[]=[];

    getUsuarios(){
      
      
       return this.httpClient.get<Usuarios[]>('http://localhost:3000/usuarios');
       
    }
}