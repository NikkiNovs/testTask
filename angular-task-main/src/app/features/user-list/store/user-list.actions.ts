import { createAction, props } from '@ngrx/store';
import { UserList } from '@features/user-list/interfaces/user.list';

export const GetUserInfoPending = createAction('[Users] get user info pending');
export const GetUserInfoSuccess = createAction(
    '[Users] get user info success',
    props<{ user: UserList[] }>()
);
