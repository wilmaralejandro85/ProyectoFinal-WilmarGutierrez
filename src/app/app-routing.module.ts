import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './layouts/auth/pages/login/login.component';
import { AlumnosComponent } from './layouts/dashboard/pages/alumnos/alumnos.component';
import { HomeComponent } from './layouts/dashboard/pages/home/home.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { CursosComponent } from './layouts/dashboard/pages/cursos/cursos.component';
import { InscripcionesComponent } from './layouts/dashboard/pages/inscripciones/inscripciones.component';
import { UsuariosComponent } from './layouts/dashboard/pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren:() => import('./layouts/dashboard/dashboard.module').then((m)=> m.DashboardModule)
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'dashboard/home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'dashboard/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
