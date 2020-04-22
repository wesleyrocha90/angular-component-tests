import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public valueSlider1: number = 50;
  public valueSlider2: number = 50;

  public unlessCondition = false;
  changeCondition() {
    this.unlessCondition = !this.unlessCondition;
  }

  public letItem = 'testando';

  public outerCounterValue = 5;

  public items = [
    { id: 1, code: '1001', name: 'Item 1' }, 
    { id: 2, code: '1002', name: 'Item 2' }, 
    { id: 3, code: '1003', name: 'Item 3' },
  ]
}
