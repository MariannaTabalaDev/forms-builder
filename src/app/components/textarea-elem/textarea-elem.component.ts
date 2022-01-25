import { Component, OnInit } from '@angular/core';
import { ElemHasType } from 'src/app/store/drag-drop.interfaces';

@Component({
    selector: 'app-textarea-elem',
    templateUrl: './textarea-elem.component.html',
    styleUrls: ['./textarea-elem.component.scss']
})
export class TextareaElemComponent implements OnInit, ElemHasType {
    
    isActive: boolean = false;
    elemType: string;
    styles: { [key: string]: string; };

    // constructor( private store: Store ) {
    constructor() {
        this.elemType = 'textarea';
        this.styles = {};
        this.styles.color = 'red';
        this.styles.backgroundColor = 'beige';
        this.styles.height = '100px';
        this.styles.width = '150px';

    }

    onClick(): void {}

    ngOnInit(): void {
    }
}