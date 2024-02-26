import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from '../../models';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UsuariosService } from '../../usuarios.service';
import { CursosService } from '../../../cursos/cursos.service';
import { Cursos } from '../../../cursos/models';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.scss'
})
export class UsuarioFormComponent implements OnChanges {

  usuarioForm: FormGroup;  
  botonAccion:string="Agregar";    
  filteredUsuarios: Observable<string[]> | undefined;
  usuario: Usuarios[] =[];

  botonApretar: any;

  @Input()  passEdit: any;
  @Input()  boton: any
  @Input()  usuarioAdd: any;

@Output()
usuarioSubmitted = new EventEmitter();

@Output()
  cancelar: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private usuariosService: UsuariosService){

    this.usuarioForm = this.fb.group({
      id: this.fb.control(0, Validators.required),
      nombres: this.fb.control('', Validators.required),
      apellidos: this.fb.control('', Validators.required),
      correo: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      rol: this.fb.control('', Validators.required)
      
    });

    this.usuariosService.getUsuarios().subscribe({
      next: (usuario) => {
        this.usuario = usuario;
      }
    });
  }

  ngOnChanges(): void {
    if(this.passEdit==undefined)
    {
      this.usuarioForm = this.fb.group({
        id: this.fb.control(0, Validators.required),
        nombres: this.fb.control('', Validators.required),
        apellidos: this.fb.control('', Validators.required),
        correo: this.fb.control('', Validators.required),
        password: this.fb.control('', Validators.required),
        rol: this.fb.control('', Validators.required)
       
      });
      
    }
    else
    {
      this.usuarioForm = this.fb.group({
        id: this.fb.control(this.passEdit.id),       
        nombres: this.fb.control(this.passEdit.nombres, Validators.required),
        apellidos: this.fb.control(this.passEdit.apellidos, Validators.required),
        correo: this.fb.control(this.passEdit.correo, Validators.required),
        password: this.fb.control(this.passEdit.password, Validators.required),
        rol: this.fb.control(this.passEdit.rol, Validators.required)
       
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
      this.usuarioForm.reset();
      this.mostrarAlerta("Se ha cancelado la operación","Bien!");
    }
    else
    {
      if(this.usuarioForm.invalid){
        this.usuarioForm.markAllAsTouched();
      } else if (this.usuarioForm.value.id == 0) {      
        this.usuarioSubmitted.emit(this.usuarioForm.value);
        this.usuarioForm.reset();
        this.mostrarAlerta("La inscripción fue creada con exito","Bien!");
      } else {     
        this.usuarioSubmitted.emit(this.usuarioForm.value);
        this.usuarioForm.reset();
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

