import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './shared/component/pages/login';
import { AdminComponent } from './admin';
import { AdminGuard, GuestGuard, LoginGuard } from './guard';
import { ChangePasswordComponent } from './shared/component/pages/change-password';

import { AdminPharmacyPanelComponent } from './admin/admin-pharmacy-panel/admin-pharmacy-panel.component';
import { ForbiddenComponent } from './shared/component/pages/forbidden';
import { NotFoundComponent } from './shared/component/pages/not-found';
import { SignupComponent } from './shared/component/pages/signup';
import { AdminDiscountsPanelComponent } from './admin/admin-discounts-panel/admin-discounts-panel.component';
import { UserVisitsComponent } from './user/user-history/user-visits/user-visits.component';
import { UserPharmacySearchComponent } from './user/user-pharmacy-search/user-pharmacy-search.component';
import { PharmacyDetailsDialogComponent } from './component/dialogs/pharmacy-details-dialog/pharmacy-details-dialog.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [GuestGuard],
    pathMatch: 'full'
  },
  {
    path: 'admin-pharmacy-panel',
    component: AdminPharmacyPanelComponent

  },
  {
    path: 'pharmacy-page/:id',
    component: PharmacyComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '403',
    component: ForbiddenComponent
  }
  , {
    path: 'discounts',
    component: AdminDiscountsPanelComponent
  }
  ,
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule',
  },
  {
    path: '**',
    redirectTo: '/404'
  },
  {
    path: 'user-home',
    component: UserPharmacySearchComponent
  },
 
  {
    path: 'user-visits',
    component: UserVisitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
