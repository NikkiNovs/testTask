import { NgModule } from '@angular/core';
import { LayoutModule } from '@core/layout/layout.module';
import { HomePageComponent } from './home-page';
import { ProfileModule } from './profile/profile.module';
import { UserListComponent } from '@features/user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from '@features/user-list/store/user-list.reducers';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from '@features/user-list/store/user-list.effects';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { DataModule } from '@features/info-user/data.module';

@NgModule({
    declarations: [
        HomePageComponent,
        UserListComponent
    ],
    exports: [
        HomePageComponent

    ],
    imports: [
        LayoutModule,
        ProfileModule,
        RouterModule,
        CommonModule,
        StoreModule.forFeature('user', reducer),
        EffectsModule.forFeature([MovieEffects]),
        MatDividerModule,
        MatListModule,
        MatCardModule,
        DataModule
    ]
})
export class FeaturesModule {
}
