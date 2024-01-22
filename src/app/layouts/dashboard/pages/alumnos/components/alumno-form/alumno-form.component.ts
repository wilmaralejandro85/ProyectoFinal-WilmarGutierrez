import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumnos } from '../../models';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrl: './alumno-form.component.scss'
})
export class AlumnoFormComponent {
  alumnosForm: FormGroup;
  
  botonAccion:string="Guardar";
@Output()
alumnoSubmitted = new EventEmitter();

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar){
this.alumnosForm = this.fb.group({
  nombres: this.fb.control('', Validators.required),
  apellidos: this.fb.control('', Validators.required),
  edad: this.fb.control(0, Validators.required),
  correo: this.fb.control('', Validators.required),
  celular: this.fb.control('', Validators.required),
});
  }

  onSubmit(): void{    
    if(this.alumnosForm.invalid){
      this.alumnosForm.markAllAsTouched();
    }else{
      this.alumnoSubmitted.emit(this.alumnosForm.value);
      this.alumnosForm.reset();
      this.mostrarAlerta("Alumno fue creado con exito","Bien!");
    }

    
  }

 
  mostrarAlerta(msg: string, accion: string) {
    this._snackBar.open(msg, accion,{
      horizontalPosition:"end",
      verticalPosition:"top",
      duration: 3000
    });
  }
}


