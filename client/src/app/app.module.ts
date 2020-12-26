import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {AdminGuard, GuestGuard, LoginGuard} from './guard';
import {NotFoundComponent} from './not-found';
import {AccountMenuComponent} from './component/header/account-menu/account-menu.component';
import {ApiCardComponent, FooterComponent, HeaderComponent} from './component';

import {ApiService, AuthService, ConfigService, FooService, UserService} from './service';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {AdminComponent} from './admin/admin.component';
import {SignupComponent} from './signup/signup.component';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {MatFormFieldModule, MatIconRegistry, MatInputModule} from '@angular/material';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/TokenInterceptor';
import { MedicinesComponent } from './admin/medicines/medicines.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { PricelistsComponent } from './admin/pricelists/pricelists.component';
import { EmployeesComponent } from './admin/employees/employees.component';
import { MedicineFilterAndSearchComponent } from './admin/medicines/medicine-filter-and-search/medicine-filter-and-search.component';
import { MedicineFilterPipe } from './component/pipes/medicine-filter.pipe';
import { MedicationStockDialogComponent } from './component/dialogs/medication-stock-dialog/medication-stock-dialog.component';
import { UserComponent } from './user/user.component';
import { WorkingHoursComponent } from './admin/working-hours/working-hours.component';
import { KeysPipe } from './component/pipes/dictionary.pipe';
import { NavigationComponent } from './admin/navigation/navigation.component';
import { AdminPharmacyPanelComponent } from './admin/admin-pharmacy-panel/admin-pharmacy-panel.component';
import { PharmacyDetailsDialogComponent } from './component/dialogs/pharmacy-details-dialog/pharmacy-details-dialog.component';
import { DermatologistsComponent } from './admin/dermatologists/dermatologists.component';
import { EditDermatologistComponent } from './admin/admin-pharmacy-panel/dialogs/edit-dermatologist/edit-dermatologist.component';
import { DermatologistsTabComponent } from './admin/admin-pharmacy-panel/tabs/dermatologists-tab/dermatologists-tab.component';
import { MedicationTabComponent } from './admin/admin-pharmacy-panel/tabs/medication-tab/medication-tab.component';


@NgModule({
  declarations: [
    MedicineFilterPipe,
    KeysPipe,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApiCardComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    AccountMenuComponent,
    ChangePasswordComponent,
    ForbiddenComponent,
    AdminComponent,
    SignupComponent,
    MedicinesComponent,
    OrdersComponent,
    PricelistsComponent,
    EmployeesComponent,
    NavigationComponent,
    MedicineFilterAndSearchComponent,
    MedicationStockDialogComponent,
    UserComponent,
    WorkingHoursComponent,
    AdminPharmacyPanelComponent,
    PharmacyDetailsDialogComponent,
    DermatologistsComponent,
    EditDermatologistComponent,
    DermatologistsTabComponent,
    MedicationTabComponent,   
  ],
  imports: [
    
    BrowserAnimationsModule,
  MatFormFieldModule ,
    MatInputModule ,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularMaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    LoginGuard,
    GuestGuard,
    AdminGuard,
    FooService,
    AuthService,
    ApiService,
    UserService,
    ConfigService,
    MatIconRegistry,
  ],
  bootstrap: [AppComponent],
  entryComponents:[MedicationStockDialogComponent,PharmacyDetailsDialogComponent,EditDermatologistComponent]
})
export class AppModule {
}
