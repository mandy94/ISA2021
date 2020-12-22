import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-medication-stock-dialog',
  templateUrl: './medication-stock-dialog.component.html',
  styleUrls: ['./medication-stock-dialog.component.css']
})
export class MedicationStockDialogComponent implements OnInit {

  constructor(  public dialogRef: MatDialogRef<MedicationStockDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
