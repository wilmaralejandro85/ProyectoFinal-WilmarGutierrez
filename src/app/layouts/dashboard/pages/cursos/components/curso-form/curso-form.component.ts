import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cursos } from '../../models';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrl: './curso-form.component.scss',  
   
})
export class CursoFormComponent implements OnChanges {
  cursoForm: FormGroup;  
  botonAccion:string="Agregar";
  
  
  botonApretar: any;

  @Input()  passEdit: any;
  @Input()  boton: any
  @Input()  cursoAdd: any;

@Output()
cursoSubmitted = new EventEmitter();

@Output()
  cancelar: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar){

    this.cursoForm = this.fb.group({
      id: this.fb.control(0, Validators.required),
      nombreCurso: this.fb.control('', Validators.required),
      descripcionCurso: this.fb.control('', Validators.required),
      fechaInicio: this.fb.control('', Validators.required),
      horario: this.fb.control('', Validators.required),
      costoCurso: this.fb.control('', Validators.required),
    });

    
  }

  ngOnChanges(): void {
    if(this.passEdit==undefined)
    {
      this.cursoForm = this.fb.group({
        id: this.fb.control(0, Validators.required),
        nombreCurso: this.fb.control('', Validators.required),
        descripcionCurso: this.fb.control('', Validators.required),
        fechaInicio: this.fb.control('', Validators.required),
        horario: this.fb.control('', Validators.required),
        costoCurso: this.fb.control('', Validators.required),
      });
      
    }
    else
    {
      this.cursoForm = this.fb.group({
        id: this.fb.control(this.passEdit.id),
        nombreCurso: this.fb.control(this.passEdit.nombreCurso, Validators.required),
        descripcionCurso: this.fb.control(this.passEdit.descripcionCurso, Validators.required),
        fechaInicio: this.fb.control(this.passEdit.fechaInicio, Validators.required),
        horario: this.fb.control(this.passEdit.horario, Validators.required),
        costoCurso: this.fb.control(this.passEdit.costoCurso, Validators.required),
       
      });

    }
    console.log('boton',this.botonAccion);
    this.botonAccion = this.boton;
  }
 
  


  onSubmit(): void {

    console.log('submit cancelar hijo',this.botonApretar);

    if(this.botonApretar==true)
    {
      this.cancelar.emit(this.botonApretar);
      this.cursoForm.reset();
      this.mostrarAlerta("Se ha cancelado la operación","Bien!");
    }
    else
    {
      if(this.cursoForm.invalid){
        this.cursoForm.markAllAsTouched();
      } else if (this.cursoForm.value.id == 0) {      
        this.cursoSubmitted.emit(this.cursoForm.value);
        this.cursoForm.reset();
        this.mostrarAlerta("Curso fue creado con exito","Bien!");
      } else {     
        this.cursoSubmitted.emit(this.cursoForm.value);
        this.cursoForm.reset();
        this.mostrarAlerta("Curso fue actualizado con exito","Bien!");
      }
    }
    
   
  }

  onPressCancelar(cancelar1:boolean){
    this.botonApretar = true;
    console.log('boton cancelar hijo',this.botonApretar);
  }
 
  mostrarAlerta(msg: string, accion: string) {
    this._snackBar.open(msg, accion,{
      horizontalPosition:"end",
      verticalPosition:"top",
      duration: 3000
    });
  }
}
