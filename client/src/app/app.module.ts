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
import { MedicationStockDialogComponent } from './component/dialogs/medication-stock-dialog/medication-stock-dialog.component';
import { UserComponent } from './user/user.component';
import { NavigationComponent } from './admin/navigation/navigation.component';
import { AdminPharmacyPanelComponent } from './admin/admin-pharmacy-panel/admin-pharmacy-panel.component';
import { PharmacyDetailsDialogComponent } from './component/dialogs/pharmacy-details-dialog/pharmacy-details-dialog.component';
import { EditDermatologistComponent } from './admin/admin-pharmacy-panel/dialogs/edit-dermatologist/edit-dermatologist.component';
import { SharedModule } from './shared/shared.module';
import { MedicationTabComponent } from './admin/admin-pharmacy-panel/tabs/medication-tab/medication-tab.component';
import { DermatologistsTabComponent } from './admin/admin-pharmacy-panel/tabs/dermatologists-tab/dermatologists-tab.component';
import { EditMedicationComponent } from './admin/admin-pharmacy-panel/dialogs/edit-medication/edit-medication.component';
import { AdminDiscountsPanelComponent } from './admin/admin-discounts-panel/admin-discounts-panel.component';
import { CreateDiscountsComponent } from './admin/admin-discounts-panel/dialogs/create-discounts/create-discounts.component';
import { AppointmentsTabComponent } from './admin/admin-pharmacy-panel/tabs/appointments-tab/appointments-tab.component';

import { AddAlergenComponent } from './user/dialogs/add-alergen/add-alergen.component';
import { EditUsersInfoComponent } from './user/dialogs/edit-users-info/edit-users-info.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserVisitsComponent } from './user/user-history/user-visits/user-visits.component';
import { UserPharmacySearchComponent } from './user/user-pharmacy-search/user-pharmacy-search.component';
import { GuestComponent } from './guest/guest.component';
import { DermatologComponent } from './dermatolog/dermatolog.component';
import { UserReservationsComponent } from './user/user-reservations/user-reservations.component';
import { UserPrescriptionsComponent } from './user/user-prescriptions/user-prescriptions.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';

import { SchedulingVisitComponent } from './pharmacy/dialogs/scheduling-visit/scheduling-visit.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { CreateAppointmentComponent } from './admin/admin-pharmacy-panel/dialogs/create-appointment/create-appointment.component';
import { PharmacistAppointmentReservationComponent } from './pharmacy/pharmacist-appointment-reservation/pharmacist-appointment-reservation.component';
import { DermatologAppointmentReservationComponent } from './pharmacy/dermatolog-appointment-reservation/dermatolog-appointment-reservation.component';
import { RegisterObjectComponent } from './super-admin/register-object/register-object.component';
import { RegisterEmployeeComponent } from './super-admin/register-employee/register-employee.component';
import { AddPharmacyDialogComponent } from './super-admin/register-object/dialogs/add-pharmacy-dialog/add-pharmacy-dialog.component';
import { AddAdminDialogComponent } from './super-admin/register-employee/dialogs/add-admin-dialog/add-admin-dialog.component';

import { AddMedicationDialogComponent } from './super-admin/register-medication/dialogs/add-medication-dialog/add-medication-dialog.component';
import { RegisterMedicationComponent } from './super-admin/register-medication/register-medication.component';
import { ConfirmationDialogComponent } from './shared/dialogs/confirmation-dialog/confirmation-dialog.component';
import { EditMedicineDialogComponent } from './super-admin/register-medication/dialogs/edit-medicine-dialog/edit-medicine-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,    
    NavigationComponent,    
    MedicationTabComponent,
    DermatologistsTabComponent,
    MedicationStockDialogComponent,
    UserComponent,
    AdminPharmacyPanelComponent,
    PharmacyDetailsDialogComponent,
    EditDermatologistComponent,
    EditMedicationComponent,
    AdminDiscountsPanelComponent,
    CreateDiscountsComponent,
    AppointmentsTabComponent,
    AddAlergenComponent,
     EditUsersInfoComponent,
    UserProfileComponent,
    UserVisitsComponent,
    UserPharmacySearchComponent,
    GuestComponent,
    RegisterObjectComponent,
    RegisterEmployeeComponent,
    DermatologComponent,
    UserReservationsComponent,
    UserPrescriptionsComponent,
    PharmacyComponent,
    SchedulingVisitComponent,
    SuperAdminComponent,
    CreateAppointmentComponent,
    PharmacistAppointmentReservationComponent,
    DermatologAppointmentReservationComponent,
    RegisterEmployeeComponent,
    AddPharmacyDialogComponent,
    AddAdminDialogComponent,
    RegisterMedicationComponent,
    AddMedicationDialogComponent,
    EditMedicineDialogComponent,
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
  entryComponents: [AddMedicationDialogComponent,EditMedicineDialogComponent,ConfirmationDialogComponent,AddMedicationDialogComponent, AddAdminDialogComponent, AddPharmacyDialogComponent,CreateAppointmentComponent,SchedulingVisitComponent,MedicationStockDialogComponent, PharmacyDetailsDialogComponent,CreateDiscountsComponent,AddAlergenComponent, EditUsersInfoComponent,EditDermatologistComponent, EditMedicationComponent]
})
export class AppModule { }
