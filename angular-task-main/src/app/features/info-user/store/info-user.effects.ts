import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getDataPending, getDataSuccess } from '@features/info-user/store/info-user.actions';
import { map, switchMap } from 'rxjs/operators';
import { IInfo } from '@features/info-user/interfaces/info.user';
import { InfoService } from '@features/info-user/info.service';

@Injectable()
export class DataEffect {

    loadData$ = createEffect(() => this.actions$.pipe(
        ofType(getDataPending),
        switchMap(() => this.infoService.getData()
        .pipe(map((userData: IInfo[]) => getDataSuccess({ userData }))))
    ));

    constructor (
        private actions$: Actions,
        private infoService: InfoService
    ) {
    }

}
