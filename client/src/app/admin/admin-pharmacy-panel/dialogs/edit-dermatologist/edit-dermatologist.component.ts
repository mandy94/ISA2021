import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _moment from 'moment';
const moment = _moment;
@Component({
  selector: 'app-edit-dermatologist',
  templateUrl: './edit-dermatologist.component.html',
  styleUrls: ['./edit-dermatologist.component.css']
})
export class EditDermatologistComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditDermatologistComponent>,
    @Inject(MAT_DIALOG_DATA) public doctor: any) { }

  createMode = false;
  oldTime;
  newStart = '08:00';
  newEnd = '17:00';
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  addNewWorkingTime(item) {
  
    item.time = { start: this.newStart, end: this.newEnd };
  }
  editWorkingTime(item) {
    this.oldTime = item.time;
    this.doctor.workingTime.forEach(element => {
      element.createMode = false;
    });
    item.createMode = true;
  }
  deleteWorkingTime(item) {
    item.time = undefined;
    item.createMode = false;
  }
  cancelOperation(item) {
    item.createMode = false;
  }
  ngOnInit() {

  }

}
