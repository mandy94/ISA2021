import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home';
import { AdminGuard, GuestGuard, LoginGuard } from './guard';

import { ApiService, AuthService, ConfigService, FooService, UserService } from './service';
import { AdminComponent } from './admin/admin.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { MatFormFieldModule, MatIconRegistry, MatInputModule } from '@angular/material';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/TokenInterceptor';
import { MedicinesComponent } from './admin/medicines/medicines.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { PricelistsComponent } from './admin/pricelists/pricelists.component';
import { EmployeesComponent } from './admin/employees/employees.component';
import { MedicineFilterAndSearchComponent } from './admin/medicines/medicine-filter-and-search/medicine-filter-and-search.component';
import { MedicationStockDialogComponent } from './component/dialogs/medication-stock-dialog/medication-stock-dialog.component';
import { UserComponent } from './user/user.component';
import { WorkingHoursComponent } from './admin/working-hours/working-hours.component';
import { NavigationComponent } from './admin/navigation/navigation.component';
import { AdminPharmacyPanelComponent } from './admin/admin-pharmacy-panel/admin-pharmacy-panel.component';
import { PharmacyDetailsDialogComponent } from './component/dialogs/pharmacy-details-dialog/pharmacy-details-dialog.component';
import { DermatologistsComponent } from './admin/dermatologists/dermatologists.component';
import { EditDermatologistComponent } from './admin/admin-pharmacy-panel/dialogs/edit-dermatologist/edit-dermatologist.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
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
    EditDermatologistComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    SharedModule
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
  entryComponents: [MedicationStockDialogComponent, PharmacyDetailsDialogComponent, EditDermatologistComponent]
})
export class AppModule { }
