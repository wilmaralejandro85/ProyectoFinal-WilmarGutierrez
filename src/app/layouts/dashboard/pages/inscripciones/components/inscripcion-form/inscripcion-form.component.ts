import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inscripcion } from '../../models';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { InscripcionesService } from '../../inscripciones.service';
import { CursosService } from '../../../cursos/cursos.service';
import { Cursos } from '../../../cursos/models';

@Component({
  selector: 'app-inscripcion-form',
  templateUrl: './inscripcion-form.component.html',
  styleUrl: './inscripcion-form.component.scss'  
})
export class InscripcionFormComponent implements OnChanges {

  inscripcionForm: FormGroup;  
  botonAccion:string="Agregar";    
  filteredCursos: Observable<string[]> | undefined;
  curso: Cursos[] =[];

  botonApretar: any;

  @Input()  passEdit: any;
  @Input()  boton: any
  @Input()  cursoAdd: any;

@Output()
inscripcionSubmitted = new EventEmitter();

@Output()
  cancelar: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private cursosService: CursosService){

    this.inscripcionForm = this.fb.group({
      id: this.fb.control(0, Validators.required),
      curso: this.fb.control('', Validators.required),
      alumno: this.fb.control('', Validators.required)
      
    });

    this.cursosService.getCursos().subscribe({
      next: (curso) => {
        this.curso = curso;
      }
    });
  }

  ngOnChanges(): void {
    if(this.passEdit==undefined)
    {
      this.inscripcionForm = this.fb.group({
        id: this.fb.control(0, Validators.required),
        curso: this.fb.control('', Validators.required),
        alumno: this.fb.control('', Validators.required),
       
      });
      
    }
    else
    {
      this.inscripcionForm = this.fb.group({
        id: this.fb.control(this.passEdit.id),
        curso: this.fb.control(this.passEdit.curso, Validators.required),
        alumno: this.fb.control(this.passEdit.alumno, Validators.required),
       
       
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
      this.inscripcionForm.reset();
      this.mostrarAlerta("Se ha cancelado la operación","Bien!");
    }
    else
    {
      if(this.inscripcionForm.invalid){
        this.inscripcionForm.markAllAsTouched();
      } else if (this.inscripcionForm.value.id == 0) {      
        this.inscripcionSubmitted.emit(this.inscripcionForm.value);
        this.inscripcionForm.reset();
        this.mostrarAlerta("La inscripción fue creada con exito","Bien!");
      } else {     
        this.inscripcionSubmitted.emit(this.inscripcionForm.value);
        this.inscripcionForm.reset();
        this.mostrarAlerta("La inscripción fue actualizada con exito","Bien!");
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
