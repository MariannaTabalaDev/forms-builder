import { Component, Input, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
import { ElemHasType } from 'src/app/store/drag-drop.interfaces';
import { Selectors } from 'src/app/store/selectors/drag-drop.selectors';

@Component({
    selector: 'app-textarea-elem',
    templateUrl: './textarea-elem.component.html',
    styleUrls: ['./textarea-elem.component.scss']
})
export class TextareaElemComponent implements OnInit, ElemHasType {
    
    isActive: boolean = false;
    elemType: string;
    id: number;

    @Input() styles: { [key: string]: string; }
    
    constructor() {
        this.elemType = 'textarea';
        this.styles = {};
        this.styles.text = '';
        this.styles.color = 'red';
        this.styles.backgroundColor = 'beige';
        this.styles.height = '100px';
        this.styles.width = '150px';
    }

    onClick(): void {}

    ngOnInit(): void {}
}