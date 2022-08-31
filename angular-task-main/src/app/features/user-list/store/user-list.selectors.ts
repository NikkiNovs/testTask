import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '@features/user-list/interfaces/user-state';

export const getInfoState = createFeatureSelector<UserState>('user');
export const getUserInfo = createSelector(getInfoState, (state) => state.user);
