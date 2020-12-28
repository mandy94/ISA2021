import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-medication',
  templateUrl: './edit-medication.component.html',
  styleUrls: ['./edit-medication.component.css']
})
export class EditMedicationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditMedicationComponent>,
    @Inject(MAT_DIALOG_DATA) public item: any) {}

  ngOnInit() {
    this.item["isReseved"] = false;
  }

  notReserved(){
    return this.item.isReseved;
  }
}
