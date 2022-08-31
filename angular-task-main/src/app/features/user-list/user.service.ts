import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserList } from '@features/user-list/interfaces/user.list';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor (public http: HttpClient) {
    }

    getUserInfo () {

        return this.http.get('https://randomuser.me/api/?results=10&noinfo')
        .pipe(map(({ results }: any): UserList[] => results.map((user: any) => ({
            cellNumber: user.cell,
            city: user.location.city,
            dateOfBirth: user.dob.date,
            email: user.email,
            firstName: user.name.first,
            id: user.id.value,
            lastName: user.name.last,
            phoneNumber: user.phone,
            picture: user.picture.medium,
            state: user.location.state
        }))));

    }

}
