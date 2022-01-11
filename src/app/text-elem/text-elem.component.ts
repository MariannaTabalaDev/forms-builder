import { Component, OnInit } from '@angular/core';
import { ElemHasType } from '../shared/drag.service';

@Component({
    selector: 'app-text-elem',
    templateUrl: './text-elem.component.html',
    styleUrls: ['./text-elem.component.scss']
})
export class TextElemComponent implements OnInit, ElemHasType {

    elemType: string;
    styles: { [key: string]: string; };
    // public styles: Styles = {};
    constructor() {
        this.elemType = 'text';
    }

    ngOnInit(): void {
    }

}
