import { AfterContentChecked, AfterViewChecked, Component, Input, ContentChild, ViewChild, ViewContainerRef, OnInit, TemplateRef, ContentChildren, AfterContentInit } from '@angular/core';
import { SelectDefDirective } from 'src/app/directives/selectDef/selectDef.directive';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

    @Input() listValue: any[];

    constructor() {}

    ngOnInit() {
        console.log(this);
    }
}
