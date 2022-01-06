
import { Injectable } from '@angular/core';



export interface ElemHasType {
    elemType: string,
}


class TextareaElem implements ElemHasType {

    public elemType: string;
    public height: number;

    constructor() {
        this.elemType = 'textarea';
        this.height = 14;
    }
};


class TextElem implements ElemHasType {

    public elemType: string;
    public placeholder: string;

    constructor() {
        this.elemType = 'text';
        this.placeholder = '';
    }

};


@Injectable({ providedIn: 'root' })
export class DragService {

    // public dragElements: string[] = ['textarea', 'text', 'button', 'select', 'checkbox'];
    public dragElements: ElemHasType[] = [new TextareaElem, new TextElem];

    public fieldsInForm: ElemHasType[] = [];


    getData(): ElemHasType[] {

        return this.dragElements;
    }

    getFieldsInForm(): ElemHasType[] {

        return this.fieldsInForm;
    }
}
