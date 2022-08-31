import { InfoState } from '@features/info-user/interfaces/info-state';
import { Action, createReducer, on } from '@ngrx/store';
import { getDataSuccess } from '@features/info-user/store/info-user.actions';

const InitialState: InfoState = {};
export const dataReducer = createReducer(
    InitialState,
    on(getDataSuccess, (state: InfoState, { userData }) => ({ ...state, userData }))
);

export function reducerData (state: InfoState | undefined, action: Action) {

    return dataReducer(state, action);

}
