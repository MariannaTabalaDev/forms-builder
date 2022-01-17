import { Component, OnInit } from '@angular/core';
import { ElemHasType } from 'src/app/store/drag-drop.interfaces';

@Component({
    selector: 'app-button-elem',
    templateUrl: './button-elem.component.html',
    styleUrls: ['./button-elem.component.scss']
})
export class ButtonElemComponent implements OnInit, ElemHasType {
    elemType: string;
    styles: { [key: string]: string; };
    constructor() {
        this.elemType = 'button';
    }

    ngOnInit(): void {
    }

}
