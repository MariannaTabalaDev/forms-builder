import { Component, OnInit } from '@angular/core';
import { ElemHasType } from 'src/app/store/drag-drop.interfaces';

@Component({
    selector: 'app-button-elem',
    templateUrl: './button-elem.component.html',
    styleUrls: ['./button-elem.component.scss']
})
export class ButtonElemComponent implements OnInit, ElemHasType {
    
    isActive: boolean = false;
    elemType: string;
    styles: { [key: string]: string; };

    constructor() {
        this.elemType = 'button';
        this.styles = {};
        this.styles.backgroundColor = 'green';
        this.styles.border = 'none';
        this.styles.color = 'white';
        this.styles.fontSize = '16px';
    }
    onClick(): void {}

    ngOnInit(): void {
    }

}
