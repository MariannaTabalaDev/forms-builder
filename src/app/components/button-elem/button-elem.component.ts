import { Component, Input, OnInit } from '@angular/core';
import { ElemHasType } from 'src/app/store/drag-drop.interfaces';

@Component({
    selector: 'app-button-elem',
    templateUrl: './button-elem.component.html',
    styleUrls: ['./button-elem.component.scss']
})
export class ButtonElemComponent implements OnInit, ElemHasType {
    
    isActive: boolean = false;
    elemType: string;
    id: number;

    @Input() styles: { [key: string]: string; }

    constructor() {
        this.elemType = 'button';
        this.styles = {};
        this.styles.backgroundColor = 'olive';
        this.styles.border = 'none';
        this.styles.color = 'white';
        this.styles.fontSize = '16px';
        // this.id = Date.now() as number;
    }
    onClick(): void {}

    ngOnInit(): void {}
}