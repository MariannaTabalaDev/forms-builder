import { Component, OnInit } from '@angular/core';
import { ElemHasType } from 'src/app/store/drag-drop.interfaces';

@Component({
    selector: 'app-text-elem',
    templateUrl: './text-elem.component.html',
    styleUrls: ['./text-elem.component.scss']
})
export class TextElemComponent implements OnInit, ElemHasType {

    elemType: string;
    styles: { [key: string]: string; };
    
    constructor() {
        this.elemType = 'text';
    }

    ngOnInit(): void {
    }

}
