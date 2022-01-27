import { createAction, props } from '@ngrx/store';
import { ElemHasType, Styles } from '../drag-drop.interfaces';



export const fieldsInFormToStoreAction = createAction(
    '[DROP_SECTION] {fieldsInFormToStore}',
    props< { elements: ElemHasType[] } >()
);


export const settingStylesToElementAction = createAction(
    '[STYLE_SECTION] {settingStylesToElement}',
    props< Styles >()
) 