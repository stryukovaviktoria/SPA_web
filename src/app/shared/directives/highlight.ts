import {
  Directive,
  ElementRef,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight: string = '#f0f0f0';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.boxShadow = '0 0 15px rgba(0,0,0,0.3)';
    this.el.nativeElement.style.transform = 'scale(1.03)';
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.boxShadow = 'none';
    this.el.nativeElement.style.transform = 'scale(1)';
    this.el.nativeElement.style.backgroundColor = 'white';
  }
}