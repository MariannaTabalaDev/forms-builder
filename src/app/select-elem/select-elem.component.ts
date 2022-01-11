import { Component, OnInit } from '@angular/core';
import { ElemHasType } from '../shared/drag.service';

@Component({
    selector: 'app-select-elem',
    templateUrl: './select-elem.component.html',
    styleUrls: ['./select-elem.component.scss']
})
export class SelectElemComponent implements OnInit, ElemHasType {
    elemType: string;
    styles: { [key: string]: string; };
    constructor() {
        this.elemType = 'select';
    }

    ngOnInit(): void {
    }

}
