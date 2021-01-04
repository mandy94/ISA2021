import { OrderItem } from './order-item.model';

export enum OrderStatus {
    New = 'NEW',
    Closed = 'CLOSED',
    Expired = 'EXPIRED'
}

export class Order {
    id: number;
    expirationDate: Date;
    status: OrderStatus;
    items: OrderItem[];

    constructor(order = {id: null, expirationDate: null, status: null, items: []}) {
        this.id = order.id;
        this.expirationDate = order.expirationDate;
        this.status = order.status;
        this.items = order.items;
    }
}
