import { Routes } from '@angular/router';
import { OrdersHomeComponent } from './home/home.component';
import { OrdersCreateComponent } from './create/create.component';
import { OrdersOffersComponent } from './offers/offers.component';

export const ordersRoutes: Routes = [
    {
        path: '',
        component: OrdersHomeComponent,
    },
    {
        path: ':id/offers',
        component: OrdersOffersComponent,
    },
    {
        path: 'create',
        component: OrdersCreateComponent,
    }
];
