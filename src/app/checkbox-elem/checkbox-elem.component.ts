import { Component, OnInit } from '@angular/core';
import { ElemHasType } from '../shared/drag.service';

@Component({
    selector: 'app-checkbox-elem',
    templateUrl: './checkbox-elem.component.html',
    styleUrls: ['./checkbox-elem.component.scss']
})
export class CheckboxElemComponent implements OnInit, ElemHasType {
    elemType: string;
    styles: { [key: string]: string; };
    constructor() {
        this.elemType = 'checkbox';
    }

    ngOnInit(): void {
    }

}
