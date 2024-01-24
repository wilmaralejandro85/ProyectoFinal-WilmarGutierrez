import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumnos } from '../../models';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrl: './alumno-form.component.scss'
})
export class AlumnoFormComponent  implements OnChanges {
  alumnosForm: FormGroup;  
  botonAccion:string="Agregar";
  

  @Input()  passEdit: any;
  @Input()  boton: any
  @Input()  alumnoAdd: any;

@Output()
alumnoSubmitted = new EventEmitter();

@Output()
cancelar :any;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar){

    this.alumnosForm = this.fb.group({
      id: this.fb.control(0, Validators.required),
      nombres: this.fb.control('', Validators.required),
      apellidos: this.fb.control('', Validators.required),
      edad: this.fb.control(0, Validators.required),
      correo: this.fb.control('', Validators.required),
      celular: this.fb.control('', Validators.required),
    });

    
  }

  ngOnChanges(): void {
    if(this.passEdit==undefined)
    {
      this.alumnosForm = this.fb.group({
        id: this.fb.control(0, Validators.required),
      nombres: this.fb.control('', Validators.required),
      apellidos: this.fb.control('', Validators.required),
      edad: this.fb.control(0, Validators.required),
      correo: this.fb.control('', Validators.required),
      celular: this.fb.control('', Validators.required),
      });
      
    }
    else
    {
      this.alumnosForm = this.fb.group({
        id: this.fb.control(this.passEdit.id),
        nombres: this.fb.control(this.passEdit.nombres, Validators.required),
        apellidos: this.fb.control(this.passEdit.apellidos, Validators.required),
        edad: this.fb.control(this.passEdit.edad, Validators.required),
        correo: this.fb.control(this.passEdit.correo, Validators.required),
        celular: this.fb.control(this.passEdit.celular, Validators.required),
      });

    }
    console.log('boton',this.botonAccion);
    this.botonAccion = this.boton;
  }
 
  


  onSubmit(): void {

    console.log('boton cancelar hijo1',this.cancelar);

    if(this.cancelar == true)
    {
      this.alumnosForm.reset();
      this.mostrarAlerta("Se ha cancelado la operación","Bien!");
    }
    else
    {
      if(this.alumnosForm.invalid){
        this.alumnosForm.markAllAsTouched();
      } else if (this.alumnosForm.value.id == 0) {      
        this.alumnoSubmitted.emit(this.alumnosForm.value);
        this.alumnosForm.reset();
        this.mostrarAlerta("Alumno fue creado con exito","Bien!");
      } else {     
        this.alumnoSubmitted.emit(this.alumnosForm.value);
        this.alumnosForm.reset();
        this.mostrarAlerta("Alumno fue actualizado con exito","Bien!");
      }
    }
    
   
  }

  onPressCancelar(cancelar1:boolean){
    this.cancelar=cancelar1;
    console.log('boton cancelar hijo',this.cancelar);
  }
 
  mostrarAlerta(msg: string, accion: string) {
    this._snackBar.open(msg, accion,{
      horizontalPosition:"end",
      verticalPosition:"top",
      duration: 3000
    });
  }
}


