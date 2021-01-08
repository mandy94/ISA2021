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
import { ServicesTabComponent } from './admin/admin-pharmacy-panel/tabs/services-tab/services-tab.component';

import { AddAlergenComponent } from './user/dialogs/add-alergen/add-alergen.component';
import { EditUsersInfoComponent } from './user/dialogs/edit-users-info/edit-users-info.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserVisitsComponent } from './user/user-history/user-visits/user-visits.component';
import { UserPharmacySearchComponent } from './user/user-pharmacy-search/user-pharmacy-search.component';
import { GuestComponent } from './guest/guest.component';
import { DermatologComponent } from './dermatolog/dermatolog.component';
import { UserReservationsComponent } from './user/user-reservations/user-reservations.component';
import { UserPrescriptionsComponent } from './user/user-prescriptions/user-prescriptions.component';



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
    ServicesTabComponent,
    AddAlergenComponent,
     EditUsersInfoComponent,
    UserProfileComponent,
    UserVisitsComponent,
    UserPharmacySearchComponent,
    GuestComponent,
    DermatologComponent,
    UserReservationsComponent,
    UserPrescriptionsComponent
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
  entryComponents: [MedicationStockDialogComponent, PharmacyDetailsDialogComponent,CreateDiscountsComponent,AddAlergenComponent, EditUsersInfoComponent,EditDermatologistComponent, EditMedicationComponent]
})
export class AppModule { }
