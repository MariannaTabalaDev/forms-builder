import { Component, Input, OnInit } from '@angular/core';
import { ElemHasType } from 'src/app/store/drag-drop.interfaces';

@Component({
    selector: 'app-checkbox-elem',
    templateUrl: './checkbox-elem.component.html',
    styleUrls: ['./checkbox-elem.component.scss']
})
export class CheckboxElemComponent implements OnInit, ElemHasType {
    isActive: boolean = false;
    elemType: string;
    id: number;
    
    @Input()  styles: { [key: string]: string; };
    
    constructor() {
        this.elemType = 'checkbox';
        this.styles = {};
        this.styles.width = '20px';
        this.styles.height = '20px';
    }
    onClick: any;

    ngOnInit(): void {
    }

}
