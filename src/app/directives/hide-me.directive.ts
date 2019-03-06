import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHideMe]'
})
export class HideMeDirective implements OnInit {

  @Input() appHideMe: number = null

  constructor(
    private renderer: Renderer2,
    private $element: ElementRef
  ) { }

  ngOnInit() {
    this.renderer.listen(this.$element.nativeElement, 'click', this.hideMe.bind(this))

    // not correct solution:
    // this.$element.nativeElement.addEventListener("click", this.hideMe.bind(this))
  }

  hideMe() {
    setTimeout(() => {
      this.$element.nativeElement.remove()
    }, this.appHideMe)
  }
}
