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
import { HomeComponent } from './pages/home/home.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CursosModule } from './pages/cursos/cursos.module';
import { HomeModule } from './pages/home/home.module';
import { InscripcionesModule } from './pages/inscripciones/inscripciones.module';
import { RouterModule } from '@angular/router';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NotFoundComponent } from '../not-found/not-found.component';
import { adminGuard } from '../../core/guards/admin.guard';

@NgModule({
  declarations: [
    DashboardComponent
    
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
   UsuariosModule,
   AlumnosModule,
   SharedModule,
   CursosModule,
   HomeModule,
   InscripcionesModule,
   RouterModule,
   MatListModule,
   MatDatepickerModule,
   RouterModule.forChild([
    {
      path: 'alumnos',
      component: AlumnosComponent
    },
    {
      path: 'cursos',
      loadChildren:() => 
      import('./pages/cursos/cursos.module').then((m)=> m.CursosModule),
      
    },
    {
      path: 'inscripciones',
      component: InscripcionesComponent
    },
    {
      path: 'usuarios',
      canActivate: [adminGuard],
      loadChildren:() => 
      import('./pages/usuarios/usuarios.module').then((m)=> m.UsuariosModule),
    },
    {
      path: 'home',
      component: HomeComponent
    },    
    {
      path: '404',
      component: NotFoundComponent
    },
    {
      path: '**',
      redirectTo: '/404'
    },

   
  ]),
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
