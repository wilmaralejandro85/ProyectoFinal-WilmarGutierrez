
import { UsuariosComponent } from './usuarios.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { UsuariosRoutingModule } from './usuario-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { UsuariosService } from './usuarios.service';

@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioFormComponent
    
  ],
  imports: [
    CommonModule,
    MatTableModule,
    UsuariosRoutingModule,
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    SharedModule,
    MatIconModule
  ],
  exports:[UsuariosComponent],
  providers:[UsuariosService]
})
export class UsuariosModule { }
