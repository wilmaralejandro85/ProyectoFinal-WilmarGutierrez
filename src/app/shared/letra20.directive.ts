import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLetra20]'
})
export class Letra20Directive {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
    console.log(this.elementRef);
    this.renderer.setStyle(
        this.elementRef.nativeElement,'font-size','20pt'
    );
  }

}
