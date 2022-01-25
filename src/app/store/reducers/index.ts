import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { IAppState } from '../drag-drop.interfaces';
import { fieldsInFormReducer } from './drag-drop.reducers';


export const initialAppState = {
  
}

export const appReducers: ActionReducerMap<IAppState, any> = {
    fieldsInForm: fieldsInFormReducer
};


// export function getInitialState() {
//    return initialAppState; 
// }

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];