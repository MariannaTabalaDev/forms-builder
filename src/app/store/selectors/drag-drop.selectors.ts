import { ElemHasType } from '../drag-drop.interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export namespace Selectors {

    export const fieldsInFormFeatureSelector = createFeatureSelector<ElemHasType[]>('fieldsInForm');
    export const fieldsInFormSelector = createSelector(
        fieldsInFormFeatureSelector,
        state => state
    );

    export const currElemStylesFeatureSelector = createFeatureSelector<ElemHasType[]>('fieldsInForm');
    export const currElemStylesSelector = createSelector(
        currElemStylesFeatureSelector,
        state => {
            const found: ElemHasType | undefined = state.find(item => item.isActive);

            if (found === undefined) {
                return {};
            }
            return found.styles;
        }
    );

    export const currElemIdFeatureSelector = createFeatureSelector<ElemHasType[]>('fieldsInForm');
    export const currElemIdSelector = createSelector(
        currElemIdFeatureSelector,
        state => {
            const found: ElemHasType | undefined = state.find(item => item.isActive);

            if (found === undefined) {
                return -1;
            }

            return found.id;
        }
    );

    export const panelIsOpenedFeatureSelector = createFeatureSelector<ElemHasType[]>('fieldsInForm');
    export const panelIsOpenedSelector = createSelector(
        panelIsOpenedFeatureSelector,
        state => {
            const found: ElemHasType | undefined = state.find(item => item.isActive);

            if (found === undefined) {
                return false;
            }
            return true;
        }
    );

}