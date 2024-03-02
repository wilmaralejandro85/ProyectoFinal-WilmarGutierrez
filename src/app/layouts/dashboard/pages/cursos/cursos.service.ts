import { Injectable } from "@angular/core";
import { Observable, mergeMap, of } from "rxjs";
import { Cursos } from "./models";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CursosService {

    constructor(private httpClient: HttpClient){}
    cursos : Cursos[]=[];

    getCursos(): Observable<Cursos[]>{
        return this.httpClient.get<Cursos[]>('http://localhost:3000/Cursos');       
      }
       
      createCursos(payload: Cursos){
        return this.httpClient.post<Cursos>('http://localhost:3000/Cursos', payload).pipe(mergeMap(() => this.getCursos()));
      }
  
      deleteCurso(cursoId: string){
        
        return this.httpClient.delete<Cursos>('http://localhost:3000/Cursos/' + cursoId);
      }
  
      detalleCurso(cursoId: string){
        
        return this.httpClient.get<Cursos>('http://localhost:3000/Cursos/' + cursoId);
      }
  
      updateCurso(id:string,curso: Cursos):Observable<Cursos>{      
        return this.httpClient.put<Cursos>('http://localhost:3000/Cursos/'  + id, curso);
      }


}