import {Component, forwardRef, OnInit} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: "app-input-slider-value",
    templateUrl: "./input-slider-value.component.html",
    styleUrls: ["./input-slider-value.component.scss"],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputSliderValueComponent),
        multi: true
    }]

})
export class InputSliderValueComponent implements ControlValueAccessor {

    /**
     * Holds the current value of the slider
     */
    value: number = 0;

    /**
     * Invoked when the model has been changed
     */
    onChange: (_: any) => void = (_: any) => {};

    /**
     * Invoked when the model has been touched
     */
    onTouched: () => void = () => {};

    constructor() {}

    /**
     * Method that is invoked on an update of a model.
     */
    updateChanges() {
        this.onChange(this.value);
    }

    ///////////////
    // OVERRIDES //
    ///////////////

    /**
     * Writes a new item to the element.
     * @param value the value
     */
    writeValue(value: number): void {
        this.value = value;
        this.updateChanges();
    }

    /**
     * Registers a callback function that should be called when the control's value changes in the UI.
     * @param fn
     */
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    /**
     * Registers a callback function that should be called when the control receives a blur event.
     * @param fn
     */
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

}