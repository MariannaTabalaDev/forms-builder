import { createAction, props } from '@ngrx/store';
import { ElemHasType } from '../drag-drop.interfaces';



// export const dragElements = createAction('[FIELD] dragElements');
// export const fieldsInForm = createAction('[FIELD] fieldsInForm');


export const addDragElem = createAction(
    '[FIELD] addElem',
    props< ElemHasType >()
);

