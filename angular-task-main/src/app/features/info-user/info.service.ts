import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IInfo } from '@features/info-user/interfaces/info.user';

@Injectable({ providedIn: 'root' })
export class InfoService {

    constructor (public http: HttpClient) {
    }

    getData () {

        return this.http.get('https://randomuser.me/api/?noinfo')
        .pipe(map(({ results }: any): IInfo[] => results.map((userData: any) => ({
            cellNumber: userData.cell,
            city: userData.location.city,
            dateOfBirth: userData.dob.date,
            email: userData.email,
            firstName: userData.name.first,
            id: userData.id.value,
            lastName: userData.name.last,
            phoneNumber: userData.phone,
            picture: userData.picture.medium,
            state: userData.location.state

        }))));

    }

}
