import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IInfo } from '@features/info-user/interfaces/info.user';
import { getDataPending } from '@features/info-user/store/info-user.actions';
import { getDataUser } from '@features/info-user/store/info-user.selectors';

@Component({
    selector: 'crx-info-user',
    styleUrls: ['./info-user.component.scss'],
    templateUrl: './info-user.component.html'
})

export class InfoUserComponent {

    public data$: Observable<IInfo[]>;

    constructor (public store: Store) {

        this.store.dispatch(getDataPending());
        this.data$ = this.store.select(getDataUser);

    }

}
