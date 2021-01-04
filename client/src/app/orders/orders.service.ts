import { Injectable } from '@angular/core';
import { ApiService, ConfigService } from 'app/service';
import { Offer } from 'app/shared/models/orders/offer.model';
import { Order } from 'app/shared/models/orders/order.model';


export class CreateNewOrderDTO {

}

@Injectable()
export class OrdersService {

    orders: Order[];

    constructor(private apiService: ApiService, private config: ConfigService) { }

    getAllOrders() {
        return this.apiService.getTyped<Order[]>(this.config.orders_all_url);
    }

    getAllOffers(orderId: number) {
        return this.apiService.getTyped<Offer[]>(this.config.get_orders_offers_url(orderId));
    }

    createNewOrder(dto: CreateNewOrderDTO) {
        return this.apiService.post(this.config.orders_create, dto);
    }

    acceptOffer(orderId: number, offerId: number) {
        const dto = {
            offerId
        };
        return this.apiService.put(this.config.get_orders_accept_offer_url(orderId), dto);

    }

}
