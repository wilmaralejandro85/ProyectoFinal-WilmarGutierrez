import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Cursos } from "./models";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CursosService {

    constructor(private httpClient: HttpClient){}
    
    getCursos(){
        return of<Cursos[]>([
            {id: 1705884607891, nombreCurso: 'Inteligencia Artificial', descripcionCurso:'Curso para ingenieros de ssitemas y afines, con proposito de suplir la necesidad laboral actual',fechaInicio: new Date(), horario: 'L-V 8:00 am a 10 am', costoCurso: 2500000},
            {id: 1705884607456, nombreCurso: 'Big Data', descripcionCurso:'Curso para ingenieros de ssitemas y afines, con proposito de suplir la necesidad laboral actual',fechaInicio: new Date(), horario: 'L-V 10:00 am a 12 pm', costoCurso: 1500000},
            {id: 1705884607123, nombreCurso: 'FullStack', descripcionCurso:'Curso para ingenieros de ssitemas y afines, con proposito de suplir la necesidad laboral actual',fechaInicio: new Date(), horario: 'L-V 2:00 pm a 4 pm', costoCurso: 2000000}
        ])
    }
}