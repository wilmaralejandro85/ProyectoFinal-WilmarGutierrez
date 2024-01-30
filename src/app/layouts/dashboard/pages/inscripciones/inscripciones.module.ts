import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesComponent } from './inscripciones.component';



@NgModule({
  declarations: [InscripcionesComponent],
  imports: [
    CommonModule
  ],
  exports:[InscripcionesComponent]
})
export class InscripcionesModule { }
