import { Directive, ViewContainerRef, TemplateRef, Input, OnInit } from '@angular/core';

export interface CarouselContext {
  $implicit: string;
}

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit {

  context: CarouselContext | null = null;

  constructor(
    private templateRef: TemplateRef<CarouselContext>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input('carouselFrom') images: string[];
  
  ngOnInit(): void{
    this.context = {
      $implicit: this.images[0]
    };
    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
  }

}
