import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';

import { Store } from '@ngrx/store';

import { fieldsInFormToStoreAction } from 'src/app/store/actions/drag-drop.actions';
import { TextareaElemComponent } from '../textarea-elem/textarea-elem.component';
import { TextElemComponent } from '../text-elem/text-elem.component';
import { ButtonElemComponent } from '../button-elem/button-elem.component';
import { SelectElemComponent } from '../select-elem/select-elem.component';
import { CheckboxElemComponent } from '../checkbox-elem/checkbox-elem.component';
import { ElemHasType, Styles } from 'src/app/store/drag-drop.interfaces';
import { Selectors } from 'src/app/store/selectors/drag-drop.selectors';


@Component({
    selector: 'app-drag-drop',
    templateUrl: './drag-drop.component.html',
    styleUrls: ['./drag-drop.component.scss'],

})

export class DragDropComponent implements OnInit {

    styles: Styles

    fieldsInFormUpdated$ = this.store.select(Selectors.fieldsInFormSelector)

    constructor(private store: Store) { }

    dragElements: ElemHasType[] = [new TextareaElemComponent, new TextElemComponent, new ButtonElemComponent, new SelectElemComponent, new CheckboxElemComponent];
    fieldsInForm: ElemHasType[] = [];

    drop(event: CdkDragDrop<ElemHasType[]>) {

        if (event.previousContainer === event.container) {

            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

        } else if (event.previousContainer.id === 'cdk-drop-list-0') {
            transferArrayItem(
                event.previousContainer.data, [],
                event.previousIndex,
                event.currentIndex,

            );

        } else if (event.previousContainer.id === 'cdk-drop-list-1') {
            copyArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );

        }

        this.store.dispatch(
            fieldsInFormToStoreAction(
                {
                    elements: this.fieldsInForm
                }
            )
        );

    }

    ngOnInit(): void {
        this.fieldsInFormUpdated$.subscribe(state => {
            
            this.fieldsInForm = [...state];

        });
    }

    onClick(i: number) {

        const fieldsInForm1 = this.fieldsInForm.map((val, index) => {
            return { ...val, isActive: index === i ? true : false }

        });
        
        this.store.dispatch(fieldsInFormToStoreAction({ elements: fieldsInForm1 }));

    }
}