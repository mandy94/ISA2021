import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { dateFormat, parseFromMoment, parseToMoment } from 'app/shared/utilities/date-and-time.utils';

@Component({
  selector: 'app-edit-users-info',
  templateUrl: './edit-users-info.component.html',
  styleUrls: ['./edit-users-info.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ]
})
export class EditUsersInfoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditUsersInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  

  editBasicInfo = new FormGroup({
    dateControl: new FormControl(parseToMoment(this.data.birthdate)),
    nameControl: new FormControl(this.data.name),
    surnameControl: new FormControl(this.data.surname)

  });

  ngOnInit() {


  }
  saveChanges() {

    this.data.birthdate = parseFromMoment( this.editBasicInfo.value.dateControl);
    this.data.name = this.editBasicInfo.value.nameControl;
    this.data.surname = this.editBasicInfo.value.surnameControl;

  }

}
