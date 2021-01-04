import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order, OrderStatus } from 'app/shared/models/orders/order.model';

@Component({
  selector: 'orders-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class OrdersHomeComponent implements OnInit {


  orders: Order[] = [
    new Order({id: 1, expirationDate: new Date(), status: OrderStatus.New, items: [] }),
    new Order({id: 2, expirationDate: new Date(), status: OrderStatus.Expired, items: [] }),

  ];

  constructor( private router: Router) { }

  ngOnInit() {
  }


  onOffersClick(order: Order) {
    this.router.navigateByUrl('orders/' + order.id + '/offers');
  }

}
