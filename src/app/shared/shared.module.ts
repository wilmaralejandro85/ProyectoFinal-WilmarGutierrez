import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { Letra20Directive } from './letra20.directive';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    FullNamePipe,
    Letra20Directive
  ],
  imports: [
    CommonModule
  ],
  exports:[FullNamePipe, Letra20Directive,
  MatTableModule,
MatButtonModule,
MatIconModule,
MatFormFieldModule,
MatInputModule,
ReactiveFormsModule,
MatCardModule,
MatDatepickerModule]
})
export class SharedModule { }
