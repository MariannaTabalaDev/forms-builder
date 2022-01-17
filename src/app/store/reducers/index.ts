import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { initialDragDropState, dragDropReducer } from './drag-drop.reducers';
import { IDragDrop } from '../drag-drop.interfaces';

export interface IAppState {
    dragDrop: IDragDrop,
}

export const initialAppState = {
    dragDrop: initialDragDropState,
} 

export function getInitialState(){
    return initialAppState;
}

export const appReducers: ActionReducerMap<IAppState, any> = {
    dragDrop: dragDropReducer,
};


export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];
