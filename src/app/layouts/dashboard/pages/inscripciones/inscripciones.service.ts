import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Inscripcion } from "./models";

@Injectable()
export class InscripcionesService {

    getInscripciones(){
        return of<Inscripcion[]>([
            {id: 1705884607891, alumno: 'Wilmar Alejandro Gutierrez Ramirez',curso: 'Inteligencia Artificial'},
        ])
    }
}