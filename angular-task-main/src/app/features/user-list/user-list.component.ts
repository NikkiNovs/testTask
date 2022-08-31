import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetUserInfoPending } from '@features/user-list/store/user-list.actions';
import { Observable } from 'rxjs';
import { getUserInfo } from '@features/user-list/store/user-list.selectors';
import { UserList } from '@features/user-list/interfaces/user.list';

@Component({
    selector: 'crx-user-list',
    styleUrls: ['./user-list.component.scss'],
    templateUrl: './user-list.component.html'
})

export class UserListComponent {

    public user$: Observable<UserList[]>;

    constructor (public store: Store) {
        this.store.dispatch(GetUserInfoPending());
        this.user$ = this.store.select(getUserInfo);
    }

}
