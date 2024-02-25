import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inscripcion } from '../../models';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-inscripcion-form',
  templateUrl: './inscripcion-form.component.html',
  styleUrl: './inscripcion-form.component.scss'
})
export class InscripcionFormComponent implements OnChanges {

  inscripcionForm: FormGroup;  
  botonAccion:string="Agregar";
  
  
  botonApretar: any;

  @Input()  passEdit: any;
  @Input()  boton: any
  @Input()  cursoAdd: any;

@Output()
inscripcionSubmitted = new EventEmitter();

@Output()
  cancelar: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar){

    this.inscripcionForm = this.fb.group({
      id: this.fb.control(0, Validators.required),
      curso: this.fb.control('', Validators.required),
      alumno: this.fb.control('', Validators.required)
      
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
