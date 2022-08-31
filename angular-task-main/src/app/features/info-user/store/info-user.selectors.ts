import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InfoState } from '@features/info-user/interfaces/info-state';

export const getDataState = createFeatureSelector<InfoState>('userData');
export const getDataUser = createSelector(getDataState, (state) => state.userData);
