import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { CdkDragDrop } from '@angular/cdk/drag-drop';


@Component({
    selector: 'app-drag-drop',
    templateUrl: './drag-drop.component.html',
    styleUrls: ['./drag-drop.component.scss']
})

export class DragDropComponent implements OnInit {

    todo = ['textarea', 'text', 'button', 'select', 'checkbox'];

    done = [''];
    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else if 
            (event.previousContainer.id === 'cdk-drop-list-0'){
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
    constructor() { }

    ngOnInit(): void {
        
    }

}