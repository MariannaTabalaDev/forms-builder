import { Component, OnInit } from '@angular/core';
import { ElemHasType } from 'src/app/store/drag-drop.interfaces';

@Component({
    selector: 'app-select-elem',
    templateUrl: './select-elem.component.html',
    styleUrls: ['./select-elem.component.scss']
})
export class SelectElemComponent implements OnInit, ElemHasType {
    
    isActive: boolean = false;
    elemType: string;
    styles: { [key: string]: string; };
    
    constructor() {
        this.elemType = 'select';
        this.styles = {}
        this.styles.color = 'black';
        this.styles.border = '1px solid red';
    }
    onClick: any;

    ngOnInit(): void {
    }

}
