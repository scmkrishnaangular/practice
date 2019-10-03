import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberonly]'
})
export class NumberonlyDirective {

  constructor(private eleRef: ElementRef) { }
  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.eleRef.nativeElement.value;

    this.eleRef.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if ( initalValue !== this.eleRef.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
