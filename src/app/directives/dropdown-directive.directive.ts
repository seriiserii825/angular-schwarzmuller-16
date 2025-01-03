import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]',
  exportAs: 'appDropdownDirective'
})
export class DropdownDirectiveDirective {
  @HostBinding('class.open') is_open = false;
  @HostListener('click') toggleOpen() {
    this.is_open = !this.is_open;
  }
}
