import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'orders-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class OrdersCreateComponent implements OnInit {

  orderItems = [];
  medicines = [];

  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    this.orderService.getListOfMedicines().pipe(tap(medicines => {
      this.medicines = medicines;
    }));
  }

  onAddNewItemClick() {
    this.orderItems.push({
      name: `Stavka #${this.orderItems.length + 1}`,
      key: `Stavka${this.orderItems.length + 1}`,
      value: 0
    });
  }


}
