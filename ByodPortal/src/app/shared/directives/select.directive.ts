import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({ selector: '[appSelect]' })
export class SelectDirective {
  @HostBinding('class.selected') isSelected = false;

  constructor(private el: ElementRef, private renderer: Renderer) {}

  @HostListener('dblclick')
  mouseover() {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover')
  @HostListener('mouseleave')
  @HostListener('click')
  setSelected() {
    this.isSelected = !this.isSelected;
  }
}
