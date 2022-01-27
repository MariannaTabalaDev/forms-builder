
import * as dragDropActions from '../actions/drag-drop.actions';
import { ElemHasType, Styles } from '../drag-drop.interfaces';
import { createReducer, on } from '@ngrx/store';


export const initialStateFieldsInForm: ElemHasType[] = [];

export const fieldsInFormReducer = createReducer(

    initialStateFieldsInForm,

    on(dragDropActions.fieldsInFormToStoreAction,
        (state, payload) => {

            return [...payload.elements]
        }
    ),
    on(dragDropActions.settingStylesToElementAction,
        (state, payload) => {
            const fieldsInFormNew = state.map(item => {
                return { ...item, styles: item.isActive ? {...payload} : {...item.styles} }
            });
            return [ ...fieldsInFormNew ]
        }
    )
);