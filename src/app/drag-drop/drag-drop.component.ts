import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DragService, ElemHasType } from '../shared/drag.service';




@Component({
    selector: 'app-drag-drop',
    templateUrl: './drag-drop.component.html',
    styleUrls: ['./drag-drop.component.scss'],
    providers: [DragService]
})

export class DragDropComponent implements OnInit {

    constructor(public dragService: DragService) { }
    
     dragElements: ElemHasType[];

    fieldsInForm: ElemHasType[];

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
        }
    }


    ngOnInit(): void {
        this.dragElements = this.dragService.getData()
        this.fieldsInForm = this.dragService.getFieldsInForm()

    }

    
    

    onClick(i:number) {
        console.log(i)
    } 

}