import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { Letra20Directive } from './letra20.directive';



@NgModule({
  declarations: [
    FullNamePipe,
    Letra20Directive
  ],
  imports: [
    CommonModule
  ],
  exports:[FullNamePipe, Letra20Directive]
})
export class SharedModule { }
