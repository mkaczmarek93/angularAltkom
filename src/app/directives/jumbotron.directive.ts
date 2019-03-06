import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appJumbotron]'
})
export class JumbotronDirective implements OnInit {

  constructor(
    private $element: ElementRef
  ) { }

  ngOnInit() {
    this.$element.nativeElement.classList.add("jumbotron")
  }
}
