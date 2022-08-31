import { createAction, props } from '@ngrx/store';
import { IInfo } from '@features/info-user/interfaces/info.user';

export const getDataPending = createAction('[Info] get Data Pending');
export const getDataSuccess = createAction(
    '[Info] get Data Success',
    props<{ userData: IInfo[] }>()
);
