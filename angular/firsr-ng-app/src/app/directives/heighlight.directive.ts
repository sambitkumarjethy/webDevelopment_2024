import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeighlight]',
  standalone: true
})
export class HeighlightDirective {
el:ElementRef
  constructor(el:ElementRef) { 
    this.el = el
  }
  @HostBinding("style.backgroundColor")
  bgcolor = "gray"

  @HostListener("mouseenter")
  changeFontsize(){
     this.el.nativeElement.style.fontSize = "50px"
  }
  @HostListener("mouseleave")
  resetFontsize(){
    this.el.nativeElement.style.fontSize = "18px"
  }
}
