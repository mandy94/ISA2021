import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersHomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ordersRoutes } from './orders.routes';
import { SharedModule } from './../shared/shared.module';
import { OrdersOffersComponent } from './offers/offers.component';
import { OrdersCreateComponent } from './create/create.component';
import { OrdersService } from './orders.service';
@NgModule({
    declarations: [OrdersHomeComponent, OrdersOffersComponent, OrdersCreateComponent],
    imports: [CommonModule, SharedModule, RouterModule.forChild(ordersRoutes)],
    exports: [],
    providers: [OrdersService],
})
export class OrdersModule { }
