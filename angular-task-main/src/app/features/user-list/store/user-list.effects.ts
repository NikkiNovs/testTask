import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from '@features/user-list/user.service';
import { GetUserInfoPending, GetUserInfoSuccess } from '@features/user-list/store/user-list.actions';
import { UserList } from '@features/user-list/interfaces/user.list';

@Injectable()
export class MovieEffects {

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(GetUserInfoPending),
        switchMap(() => this.userService.getUserInfo()
        .pipe(map((user: UserList[]) => GetUserInfoSuccess({ user }))))
    ));

    constructor (
        private actions$: Actions,
        private userService: UserService
    ) {
    }

}
