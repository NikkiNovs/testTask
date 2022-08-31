import { Action, createReducer, on } from '@ngrx/store';
import { GetUserInfoSuccess } from './user-list.actions';
import { UserState } from '@features/user-list/interfaces/user-state';

const userInitialState: UserState = {};

export const usersReducer = createReducer(
    userInitialState,
    on(GetUserInfoSuccess, (state: UserState, { user }) => ({
        ...state, user
    }))
);

export function reducer (state: UserState | undefined, action: Action) {

    return usersReducer(state, action);

}
