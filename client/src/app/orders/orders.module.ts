import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersHomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ordersRoutes } from './orders.routes';

@NgModule({
    declarations: [ OrdersHomeComponent],
    imports: [ CommonModule, RouterModule.forChild(ordersRoutes) ],
exports: [],
    providers: [],
})
export class OrdersModule {

}