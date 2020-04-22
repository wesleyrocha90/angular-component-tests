import {Component, forwardRef, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "app-input-slider",
    templateUrl: "./input-slider.component.html",
    styleUrls: ["./input-slider.component.scss"],
    providers: []
})
export class InputSliderComponent {

    /**
     * Holds the current value of the slider
     */
    @Input() inputSliderValue: string = "";

    /**
     * Invoked when the model has been changed
     */
    @Output() inputSliderValueChange: EventEmitter<string> = new EventEmitter<string>();

}