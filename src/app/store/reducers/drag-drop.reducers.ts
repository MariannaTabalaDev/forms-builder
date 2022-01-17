import { createReducer, on } from '@ngrx/store';
import * as dragDropActions from '../actions/drag-drop.actions';
import { IDragDrop } from '../drag-drop.interfaces';


export const initialDragDropState: IDragDrop = {
    elements: [{elemType: "open" }], 
}

export const dragDropReducer = createReducer(
    initialDragDropState,
    on(
        dragDropActions.addDragElem, 
        (state, payload) => ({
            ...state,
            elements: [...state.elements, payload]
        }),
    )
);