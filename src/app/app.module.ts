import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputSliderComponent } from './components/input-slider/input-slider.component';
import { InputSliderValueComponent } from './components/input-slider-value/input-slider-value.component';
import { CarouselDirective } from './directives/carousel/carousel.directive';
import { UnlessDirective } from './directives/unless/unless.directive';
import { SelectDefDirective } from './directives/selectDef/selectDef.directive';
import { SelectComponent } from './components/select/select.component';
import { LetDirective } from './directives/let/let.directive';
import { CounterInputComponent } from './components/counter-input/counter-input.component';
import { RangeDirective } from './directives/range/range.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputSliderComponent,
    InputSliderValueComponent,
    CarouselDirective,
    SelectDefDirective,
    UnlessDirective,
    SelectComponent,
    LetDirective,
    CounterInputComponent,
    RangeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [
    SelectComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
