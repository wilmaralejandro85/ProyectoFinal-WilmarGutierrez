import { Component, EventEmitter, Input, Output,OnChanges } from '@angular/core';
import { Inscripcion } from './models';
import { AlumnoPipe } from '../../../../shared/full-name.pipe';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InscripcionFormComponent } from './components/inscripcion-form/inscripcion-form.component';
import { InscripcionesService } from './inscripciones.service';


@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss'
})
export class InscripcionesComponent {

  passEdit: any; 
  mostrar=false;
  inscripcionAdd: Inscripcion | undefined;
  boton: any;  



  displayedColumns: string[] = ['id','alumno', 'curso', 'acciones'];

  inscripcion: Inscripcion[] =[];

  constructor( private _snackBar: MatSnackBar, private inscripcionService: InscripcionesService){
   
    this.inscripcionService.getInscripciones().subscribe({
      next: (inscripcion) => {
        this.inscripcion = inscripcion;
      },
      complete: () => {
        const delay = 1000;
        
        
      }
    })

  }



   
    ngOnChanges(): void {
      
    }

    onInscripcionSubmitted(ev: Inscripcion): void{
      console.log('submit desde padre ',this.mostrar);
      if(ev.id==0)
      {
        
        this.inscripcion = [...this.inscripcion, {...ev, id: new Date().getTime()}];
        console.log('lista inscripcion',this.inscripcion)
        this.mostrar=false;
      }
      else
      {
        this.inscripcion = this.updateInscripcion(ev);
        this.updateList()
        this.mostrar=false;
      }
      
    }


    onPressInscripcionAdd(){
      this.mostrar=true;
      this.passEdit = this.inscripcionAdd;
      console.log('passedit en padre',this.passEdit);
      this.boton='Agregar';
    }

    deleteInscripcion(id: number): Inscripcion[] {
      const dataSourceFiltered = this.inscripcion.filter(el => el.id != id)
      this.inscripcion = [...dataSourceFiltered];
      return this.inscripcion
    }

    updateList() {
      console.log("UPDATELIST")
      this.inscripcion = [...this.getAllInscripcion()]
      
    }

    onInscripcionDelete(id: number): void {
      this.deleteInscripcion(id);
      this.updateList()
      this.mostrarAlerta("La Inscripcion fue eliminada con exito","Bien!");
    }

    getAllInscripcion() {
      return this.inscripcion
    }

    updateInscripcion(inscripcion: Inscripcion) {
      const index = this.inscripcion.findIndex(el => el.id == inscripcion.id)     
      this.inscripcion[index] = inscripcion;      
      return this.inscripcion
    }

    onPressInscripcionEdit(inscripcion:Inscripcion) {
      this.passEdit = inscripcion
      console.log(inscripcion);
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
