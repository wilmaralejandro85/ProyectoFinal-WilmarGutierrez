import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { AlumnosService } from '../../../../core/services/alumnos.service';
import { AlumnosMockService } from '../../../../core/services/alumnos-mock.service';


@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnoFormComponent
  ],
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
  exports:[AlumnosComponent],
  providers:[AlumnosService,
    {
      provide:'USER_TOKEN',
      useValue: 'fdofjdsfgdsiweopgjdvjdklfjdslkfdkfjdkl',
    },
  
  
  ],
    
})
export class AlumnosModule { }
