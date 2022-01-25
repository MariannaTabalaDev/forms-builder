import { createAction, props } from '@ngrx/store';
import { ElemHasType } from '../drag-drop.interfaces';



export const fieldsInFormToStoreAction = createAction(
    '[DROP_SECTION] {fieldsInFormToStore}',
    props< { elements: ElemHasType[] } >()
);

export const stylesToEditAction = createAction(
    '[DROP_SECTION] {stylesToEditAction}',
    props< ElemHasType >()
);


