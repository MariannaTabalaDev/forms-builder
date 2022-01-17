import { Component, OnInit } from '@angular/core';
import { transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { addDragElem } from 'src/app/store/actions/drag-drop.actions';
import { Observable } from 'rxjs';
import { TextareaElemComponent } from '../textarea-elem/textarea-elem.component';
import { TextElemComponent } from '../text-elem/text-elem.component';
import { ButtonElemComponent } from '../button-elem/button-elem.component';
import { SelectElemComponent } from '../select-elem/select-elem.component';
import { CheckboxElemComponent } from '../checkbox-elem/checkbox-elem.component';
import { ElemHasType } from 'src/app/store/drag-drop.interfaces';



@Component({
    selector: 'app-drag-drop',
    templateUrl: './drag-drop.component.html',
    styleUrls: ['./drag-drop.component.scss'],

})

export class DragDropComponent implements OnInit {

    constructor(private store: Store) { }


    dragElements: ElemHasType[] = [new TextareaElemComponent, new TextElemComponent, new ButtonElemComponent, new SelectElemComponent, new CheckboxElemComponent];

    fieldsInForm: ElemHasType[] = [];

    public fieldsfromStore$: Observable<any>;

    drop(event: CdkDragDrop<ElemHasType[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else if
            (event.previousContainer.id === 'cdk-drop-list-0') {
            transferArrayItem(
                event.previousContainer.data, [],
                event.previousIndex,
                event.currentIndex,
            );
        } else if
            (event.previousContainer.id === 'cdk-drop-list-1') {
            copyArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
            this.store.dispatch(addDragElem({ elemType: 'this.elemType' }))
        }
    }

    ngOnInit(): void {
    }


    onClick(i: number) {
        console.log(i)
    }
}