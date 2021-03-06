import { Component, Input, OnInit } from '@angular/core';
import { ElemHasType } from 'src/app/store/drag-drop.interfaces';


@Component({
    selector: 'app-text-elem',
    templateUrl: './text-elem.component.html',
    styleUrls: ['./text-elem.component.scss']
})
export class TextElemComponent implements OnInit, ElemHasType {

    isActive: boolean = false;
    elemType: string;
    id: number;

    @Input() styles: { [key: string]: string; }
    
    constructor() {
        this.elemType = 'text';
        this.styles = {};
        this.styles.color = 'black';
        this.styles.backgroundColor = 'beige';
        this.styles.height = '15px';
        this.styles.width = '200px';
    }
    onClick: any;

    ngOnInit(): void {
    }

}
