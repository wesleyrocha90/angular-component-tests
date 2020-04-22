import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[range]'
})
export class RangeDirective {

  _range: number[];

  @Input()
  set range(value: number[]) {
    this.viewContainerRef.clear();
    this._range = this.generateRange(value[0], value[1]);
    this._range.forEach(num => {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: num
      });
    });
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  generateRange(from: number, to: number) {
    return [...Array(15 - 10).keys()].map(value => value + 10);
  }
}
