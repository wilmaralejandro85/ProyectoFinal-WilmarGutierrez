import { Component, EventEmitter, Input, Output,OnChanges } from '@angular/core';
import { Alumnos } from './models';
import { AlumnoPipe } from '../../../../shared/full-name.pipe';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {
  passEdit: any; 
  mostrar=false;
  alumnoAdd: Alumnos | undefined;
  boton: any;  



  displayedColumns: string[] = ['id','nombreCompleto', 'edad', 'correo', 'celular', 'acciones'];
  dataSource : Alumnos[]=[
  {id: 1705884607891, nombres: 'Wilmar Alejandro', apellidos:'Gutierrez Ramirez',edad: 38, correo: 'wilmaralejandro85@hotmail.com', celular:'3184249076'},
  {id: 1705884607456, nombres: 'Jhovany Hernesto', apellidos:'Pedraza Lopez',edad: 35, correo: 'jhonvanypedra@gmail.com', celular:'3114504034'},
  {id: 1705884607123, nombres: 'Maria Helena', apellidos:'Cifuentes Gonzalez',edad: 29, correo: 'marihelena123@hotmail.com', celular:'3013454567'},
  {id: 1705884607555, nombres: 'Juan Fernando', apellidos:'Higuita Arias',edad: 45, correo: 'juanfernanhi@hotmail.com', celular:'3114387670'},
  {id: 1705884607122, nombres: 'Luisa Fernanda', apellidos:'Lujan Valdez',edad: 36, correo: 'luisafernanda456@gmail.com', celular:'312345523'},
  {id: 1705884607788,  nombres: 'Julian de Jesus', apellidos:'Moralez Alzate',edad: 27, correo: 'julijesus45@gmail.com', celular:'3115463456'},
  
    ];

    constructor( private _snackBar: MatSnackBar){
      
    }
   
    ngOnChanges(): void {
      
    }

    onAlumnoSubmitted(ev: Alumnos): void{
      
      if(ev.id==0)
      {
        this.dataSource = [...this.dataSource, {...ev, id: new Date().getTime()}];
        this.mostrar=false;
      }
      else
      {
        this.dataSource = this.updateAlumno(ev);
        this.updateList()
        this.mostrar=false;
      }
      
    }


    onPressStudentAdd(){
      this.mostrar=true;
      this.passEdit = this.alumnoAdd;
      console.log('passedit en padre',this.passEdit);
      this.boton='Agregar';
    }

    deleteStudent(id: number): Alumnos[] {
      const dataSourceFiltered = this.dataSource.filter(el => el.id != id)
      this.dataSource = [...dataSourceFiltered];
      return this.dataSource
    }

    updateList() {
      console.log("UPDATELIST")
      this.dataSource = [...this.getAllStudents()]
      
    }

    onStudentDelete(id: number): void {
      this.deleteStudent(id);
      this.updateList()
      this.mostrarAlerta("Alumno fue eliminado con exito","Bien!");
    }

    getAllStudents() {
      return this.dataSource
    }

    updateAlumno(alumnos: Alumnos) {
      const index = this.dataSource.findIndex(el => el.id == alumnos.id)     
      this.dataSource[index] = alumnos;      
      return this.dataSource
    }

    onPressStudentEdit(alumno:Alumnos) {
      this.passEdit = alumno
      console.log(alumno);
      this.mostrar=true;      
      this.boton = 'Actualizar';      
    }

    mostrarAlerta(msg: string, accion: string) {
      this._snackBar.open(msg, accion,{
        horizontalPosition:"end",
        verticalPosition:"top",
        duration: 3000
      });
    }
}
