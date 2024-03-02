import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { MatTableModule } from '@angular/material/table';
import { CursoFormComponent } from './components/curso-form/curso-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosService } from './cursos.service';
import { EffectsModule } from '@ngrx/effects';
import { CursosEffects } from './store/cursos.effects';
import { StoreModule } from '@ngrx/store';
import { cursosFeature } from './store/cursos.reducer';



@NgModule({
  declarations: [
    CursosComponent,
    CursoFormComponent
  ],
  imports: [
    CommonModule,    
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    SharedModule,
    MatIconModule,
    MatDatepickerModule,
    CursosRoutingModule,
    EffectsModule.forFeature([CursosEffects]),
    StoreModule.forFeature(cursosFeature),
  ],
  exports:[CursosComponent],
  providers:[CursosService]
})
export class CursosModule { }
