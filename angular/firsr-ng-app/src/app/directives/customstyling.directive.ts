import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomstyling]',
  standalone: true
})
export class CustomstylingDirective {
 
  constructor( private el:ElementRef ) { 
  }

  @HostBinding("style.backgroundColor")
  bgcolor = "green"

  @HostBinding("style.color")
  color = "white"

   @HostListener("mouseenter")
  changeFontsize(){
     this.el.nativeElement.style.fontSize = "50px"
  }

    @HostListener("mouseleave")
  resetFontsize(){
     this.el.nativeElement.style.fontSize = "18px"
  }



}
