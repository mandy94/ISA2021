import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-pharmacy-details-dialog',
  templateUrl: './pharmacy-details-dialog.component.html',
  styleUrls: ['./pharmacy-details-dialog.component.css']
})
export class PharmacyDetailsDialogComponent implements OnInit {

  constructor(  public dialogRef: MatDialogRef<PharmacyDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public current_pharmacy: any) {}

  ngOnInit() {
  }

}
