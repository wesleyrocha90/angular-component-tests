import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

interface LetContext<T> {
  $implicit?: T;
  appLet?: T;
}

@Directive({
  selector: '[appLet]'
})
export class LetDirective<T> {

  private context: LetContext<T> = {
    $implicit: undefined,
    appLet: undefined
  };

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<LetContext<T>>
  ) { 
    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
  }

  @Input()
  set appLet(value: T) {
    this.context.appLet = this.context.$implicit = value;
  }

}
