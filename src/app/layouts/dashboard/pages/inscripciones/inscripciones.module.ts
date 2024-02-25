import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesComponent } from './inscripciones.component';
import { InscripcionFormComponent } from './components/inscripcion-form/inscripcion-form.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { InscripcionesService } from './inscripciones.service';



@NgModule({
  declarations: [InscripcionesComponent, InscripcionFormComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    SharedModule,
    MatIconModule
  ],
  exports:[InscripcionesComponent],
  providers:[InscripcionesService]
})
export class InscripcionesModule { }
