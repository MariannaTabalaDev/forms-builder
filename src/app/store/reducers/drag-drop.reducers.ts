
import * as dragDropActions from '../actions/drag-drop.actions';
import { ElemHasType } from '../drag-drop.interfaces';
import { createReducer, on } from '@ngrx/store';


export const initialStateFieldsInForm: ElemHasType[] = [];

export const fieldsInFormReducer = createReducer(

    initialStateFieldsInForm,

    on(dragDropActions.fieldsInFormToStoreAction,
        (state, payload) => {
            return [...state, ...payload.elements]
        }
    ),
    
    on(dragDropActions.settingStylesToElementAction,
        (state, payload) => {
            // return {...state, payload}

            const fieldsInFormNew = state.map(item => {
                if(!item.isActive) return item;
                return { ...item, styles: payload }
            });
            
            return [...fieldsInFormNew]
        }
    )
);