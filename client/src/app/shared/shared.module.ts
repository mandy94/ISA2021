import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from 'app/shared/component/pages/change-password';
import { LoginComponent } from 'app/shared/component/pages/login';
import { FooterComponent } from './component/footer';
import { HeaderComponent } from './component/header';
import { AccountMenuComponent } from './component/header/account-menu/account-menu.component';
import { ForbiddenComponent } from './component/pages/forbidden';
import { NotFoundComponent } from './component/pages/not-found';
import { SignupComponent } from './component/pages/signup';
import { KeysPipe } from './pipe/dictionary.pipe';
import { MedicineFilterPipe } from './pipe/medicine-filter.pipe';
import { ApiCardComponent } from './component/api-card/api-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        MedicineFilterPipe,
        KeysPipe,
        HeaderComponent,
        FooterComponent,
        ApiCardComponent,
        LoginComponent,
        NotFoundComponent,
        AccountMenuComponent,
        ChangePasswordComponent,
        ForbiddenComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        AngularMaterialModule,
        RouterModule
    ],
    exports: [
        MedicineFilterPipe,
        KeysPipe,
        ApiCardComponent,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        AngularMaterialModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {
}