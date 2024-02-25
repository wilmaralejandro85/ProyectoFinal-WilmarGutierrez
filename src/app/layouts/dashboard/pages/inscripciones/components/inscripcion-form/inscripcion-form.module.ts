import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {provideNativeDateAdapter} from '@angular/material/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule
  ]
})
export class InscripcionFormModule { 



}
