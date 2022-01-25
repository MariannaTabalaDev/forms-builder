
import * as dragDropActions from '../actions/drag-drop.actions';
import { ElemHasType } from '../drag-drop.interfaces';
import { createReducer, on } from '@ngrx/store';

export const initialStateFieldsInForm: ElemHasType[] = [];

export const fieldsInFormReducer = createReducer(

    initialStateFieldsInForm,

    on(dragDropActions.fieldsInFormToStoreAction,
        (state, payload) => {
    
            return [...payload.elements]
        }
    )

);


