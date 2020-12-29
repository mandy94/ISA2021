import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';


@Component({
  selector: 'app-edit-users-info',
  templateUrl: './edit-users-info.component.html',
  styleUrls: ['./edit-users-info.component.css'],
  providers:[
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class EditUsersInfoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditUsersInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
     dateFormat = 'DD-MM-YYYY';
  
    editBasicInfo = new FormGroup({
      dateControl: new FormControl(moment(this.data.birthdate, this.dateFormat)),
      nameControl : new FormControl(this.data.name),
      surnameControl : new FormControl(this.data.surname)

    });

  ngOnInit() {

    
  }
  saveChanges(){
  /*  
  this.data.birthdate = this.editBasicInfo.value.dateControl.format(this.dateFormat);
 console.log(
  this.editBasicInfo.value.nameControl.value);
  this.data.surname = this.editBasicInfo.value.surnameControl.value;
    */
  }

}
