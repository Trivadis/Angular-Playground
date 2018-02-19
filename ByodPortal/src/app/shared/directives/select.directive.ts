import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({ selector: '[appSelect]' })
export class SelectDirective {
  @HostBinding('class.selected') isSelected = false;
  @Input() backgroundColor: string;
  constructor(private el: ElementRef, private renderer: Renderer) {}

  @HostListener('dblclick')
  mouseover() {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', this.backgroundColor);
  }

  @HostListener('mouseover')
  @HostListener('mouseleave')
  @HostListener('click')
  setSelected() {
    this.isSelected = !this.isSelected;
  }
}
