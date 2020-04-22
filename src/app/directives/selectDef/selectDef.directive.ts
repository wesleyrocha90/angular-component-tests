import { Directive, TemplateRef, ViewContainerRef, Input, ComponentFactoryResolver, OnDestroy, Injector, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appSelectDef]'
})
export class SelectDefDirective implements OnInit {

  private context: any = {};
  
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { 
  }

  ngOnInit(): void {
    this.context = {
        $implicit: { name: 'directiva' }
    }
    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
  }
}
