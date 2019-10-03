import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphanumberonly]'
})
export class AlphanumberonlyDirective {

  constructor(private eleRef: ElementRef) { }

  @HostListener('input', [ '$event']) onInputChange(event) {
    const initValue = this.eleRef.nativeElement.value;
    this.eleRef.nativeElement.value = initValue.replace(/[^a-zA-Z0-9]*/g, '');
    if (initValue !== this.eleRef.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
