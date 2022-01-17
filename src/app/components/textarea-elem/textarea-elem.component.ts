import { Component, OnInit } from '@angular/core';
import { ElemHasType } from 'src/app/store/drag-drop.interfaces';


@Component({
    selector: 'app-textarea-elem',
    templateUrl: './textarea-elem.component.html',
    styleUrls: ['./textarea-elem.component.scss']
})
export class TextareaElemComponent implements OnInit, ElemHasType {

    elemType: string;
    styles: { [key: string]: string; };


    constructor() {
        this.elemType = 'textarea';
        this.styles = {}
        this.styles.color = 'red';
        this.styles.backgroundColor = 'pink';
        this.styles.height = '100px';
        this.styles.width = '200px';
        this.styles.backgroundColor = 'pink';
    }


    ngOnInit(): void {
    }

}
