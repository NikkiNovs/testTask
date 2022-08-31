import { NgModule } from '@angular/core';
import { InfoUserComponent } from '@features/info-user/info-user.component';
import { LayoutModule } from '@core/layout/layout.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducerData } from '@features/info-user/store/info-user.reducers';
import { DataEffect } from '@features/info-user/store/info-user.effects';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        InfoUserComponent
    ],
    exports: [
        InfoUserComponent
    ],
    imports: [
        LayoutModule,
        RouterModule,
        CommonModule,
        StoreModule.forFeature('userData', reducerData),
        EffectsModule.forFeature([DataEffect]),
        MatDividerModule,
        MatListModule,
        MatCardModule
    ]
})
export class DataModule {

}
