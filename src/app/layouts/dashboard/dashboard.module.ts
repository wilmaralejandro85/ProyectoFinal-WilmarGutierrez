import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { AlumnosModule } from './pages/alumnos/alumnos.module';
import { SharedModule } from '../../shared/shared.module';
import { InscripcionesComponent } from './pages/inscripciones/inscripciones.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InscripcionesComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
   UsuariosModule,
   AlumnosModule,
   SharedModule

  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
