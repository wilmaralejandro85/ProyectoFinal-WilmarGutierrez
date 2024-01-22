import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import {MatTableModule} from '@angular/material/table';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';

@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioFormComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports:[UsuariosComponent]
})
export class UsuariosModule { }
