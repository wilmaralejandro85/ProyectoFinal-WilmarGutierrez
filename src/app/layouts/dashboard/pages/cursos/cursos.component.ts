import { Component, EventEmitter, Input, Output,OnChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlumnosService } from '../../../../core/services/alumnos.service';
import { Cursos } from '../cursos/models';
import { CursosService } from './cursos.service';
import { LoadingService } from '../../../../core/services/loading.service';
import { Store } from '@ngrx/store';
import { CursosActions } from './store/cursos.actions';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  passEdit: any; 
  mostrar=false;
  cursoAdd: Cursos | undefined;
  boton: any;  
  
  displayedColumns: string[] = ['id','nombreCurso', 'descripcionCurso', 'fechaInicio','horario', 'costoCurso', 'acciones'];

  cursos: Cursos[] =[];

    constructor( private _snackBar: MatSnackBar, private cursosService: CursosService, private store: Store){
     
      this.listarCursos();
      this.store.dispatch(CursosActions.loadCursoss());
    }
   

   

    ngOnChanges(): void {
      
    }

    listarCursos() : void {
      this.cursosService.getCursos().subscribe({
        next: (cursos) => {
          this.cursos = cursos;
        },
        complete: () => {
          const delay = 1000;
          
          
        }
      })
    }
    onCursoSubmitted(ev: Cursos): void{
      
      if(ev.id=="0")
      {
        this.cursosService
        .createCursos({...ev, id: new Date().getTime().toString()})
        .subscribe({
          next: (cursos: any) => {
            this.cursos = [...cursos];
          },
        });
        
        this.mostrar=false;
      }
      else
      {
  
        this.cursosService
        .updateCurso(ev.id,ev)
        .subscribe({
          next: (cursos: any) => {
            this.cursos = [...cursos];
          },
        });
  
        
        this.mostrar=false;
      }
    }

    
  

    onPressCursoAdd(){
      this.mostrar=true;
      this.passEdit = this.cursoAdd;
      console.log('passedit en padre',this.passEdit);
      this.boton='Agregar';
    }

    deleteCurso(id: string): Cursos[] {
      const dataSourceFiltered = this.cursos.filter(el => el.id != id)
      this.cursos = [...dataSourceFiltered];
      return this.cursos
    }

    updateList() {
      console.log("UPDATELIST")
      this.cursos = [...this.getAllCursos()]
      
    }

    onCursoDelete(id: string): void {
     
      console.log('curso a eliminar',id);
      this.cursosService
      .deleteCurso(id)
      .subscribe({
        next: (cursos: any) => {
          this.cursos = [...cursos];
        },
      });
      console.log('curso con eliminacion', this.cursos);    
      this.listarCursos();
      this.mostrarAlerta("El Curso fue eliminado con exito","Bien!");
    }

    getAllCursos() {
      return this.cursos
    }

    updateCurso(cursos: Cursos) {
      const index = this.cursos.findIndex(el => el.id == cursos.id)     
      this.cursos[index] = cursos;      
      return this.cursos
    }

    onPressCursoEdit(curso:Cursos) {
      this.passEdit = curso
      console.log(curso);
      this.mostrar=true;      
      this.boton = 'Actualizar';      
    }

    recibirCancelar(can:boolean): void{
      
      this.mostrar=false;
      console.log('cancelar que llego al padre',can);
    }

    mostrarAlerta(msg: string, accion: string) {
      this._snackBar.open(msg, accion,{
        horizontalPosition:"end",
        verticalPosition:"top",
        duration: 3000
      });
    }

  
}
