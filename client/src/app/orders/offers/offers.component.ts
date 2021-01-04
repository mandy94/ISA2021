import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from 'app/shared/models/orders/offer.model';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'orders-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OrdersOffersComponent implements OnInit {

  orderId: number;
  offers: [];

  constructor(private route: ActivatedRoute, private ordersService: OrdersService) { }

  ngOnInit() {
    this.orderId = this.route.snapshot.params.id;
  }

  onOfferAccept(offer: Offer) {
    this.ordersService.acceptOffer(this.orderId, offer.id);
  }

}
