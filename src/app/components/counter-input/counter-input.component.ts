import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterInputComponent),
    multi: true
  }]
})
export class CounterInputComponent implements ControlValueAccessor {
  
  @Input()
  counterValue = 0;

  increment() {
    this.counterValue++;
    this.propagateChange(this.counterValue);
  }

  decrement() {
    this.counterValue--;
    this.propagateChange(this.counterValue);
  }

  propagateChange = (_: any) => {};
  writeValue(value: any): void {
    if (value !== undefined) {
      this.counterValue = value;
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
}
