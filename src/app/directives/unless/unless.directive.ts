import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

/**
 * Add the template content to the DOM unless the condition is true.
 *
 * <div *appUnless="errorCount" class="success">
 *   Congrats! Everything is great!
 * </div>
 */
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
