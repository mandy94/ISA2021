import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'orders-offer-details-dialog',
  templateUrl: './offer-details-dialog.component.html',
  styleUrls: ['./offer-details-dialog.component.css']
})
export class OrdersOfferDialogComponent implements OnInit {

  constructor(  public dialogRef: MatDialogRef<OrdersOfferDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public offer: any) {}

  ngOnInit() {
  }

}
