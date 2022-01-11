
import { Injectable } from '@angular/core';
import { TextareaElemComponent } from '../textarea-elem/textarea-elem.component';
import { TextElemComponent } from '../text-elem/text-elem.component';
import { ButtonElemComponent } from '../button-elem/button-elem.component';
import { SelectElemComponent } from '../select-elem/select-elem.component';
import { CheckboxElemComponent } from '../checkbox-elem/checkbox-elem.component';

type Styles = {
    [key: string]: string;
}

export interface ElemHasType {
    elemType: string,
    styles: Styles,
}


// class TextareaElem implements ElemHasType {

//     public elemType: string;
//     public styles: Styles = {};

//     constructor() {
//         this.elemType = 'textarea';
//         this.styles.color = 'red';
//         this.styles.backgroundColor = 'pink';
//         this.styles.height = '100px';
//         this.styles.width = '200px';
//         this.styles.backgroundColor = 'pink';

//     }
// };


// class TextElem implements ElemHasType {

//     public elemType: string;
//     public styles: Styles = {};

//     constructor() {
//         this.elemType = 'text';
//     }

// };

// class ButtonElem implements ElemHasType {

//     public elemType: string;
//     public styles: Styles = {};

//     constructor() {
//         this.elemType = 'button';
//     }

// };

// class SelectElem implements ElemHasType {

//     public elemType: string;
//     public styles: Styles = {};

//     constructor() {
//         this.elemType = 'select';

//     }

// };
// class CheckboxElem implements ElemHasType {

//     public elemType: string;
//     public styles: Styles = {};

//     constructor() {
//         this.elemType = 'checkbox';

//     }

// };


@Injectable({ providedIn: 'root' })
export class DragService {

    public dragElements: ElemHasType[] = [new TextareaElemComponent, new TextElemComponent, new ButtonElemComponent, new SelectElemComponent, new CheckboxElemComponent];


    public fieldsInForm: ElemHasType[] = [];


    getData(): ElemHasType[] {

        return this.dragElements;
    }

    getFieldsInForm(): ElemHasType[] {

        return this.fieldsInForm;
    }

}
