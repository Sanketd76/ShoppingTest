import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDrowpdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
