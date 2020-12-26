import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './shared/component/pages/login';
import { AdminComponent } from './admin';
import { AdminGuard, GuestGuard, LoginGuard } from './guard';
import { ChangePasswordComponent } from './shared/component/pages/change-password';
import { WorkingHoursComponent } from './admin/working-hours/working-hours.component';
import { AdminPharmacyPanelComponent } from './admin/admin-pharmacy-panel/admin-pharmacy-panel.component';
import { DermatologistsComponent } from './admin/dermatologists/dermatologists.component';
import { ForbiddenComponent } from './shared/component/pages/forbidden';
import { NotFoundComponent } from './shared/component/pages/not-found';
import { SignupComponent } from './shared/component/pages/signup';

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
    path: 'working-time',
    component: WorkingHoursComponent,
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
  }, {
    path: 'dermatologists',
    component: DermatologistsComponent
  }
  ,
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule',
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
