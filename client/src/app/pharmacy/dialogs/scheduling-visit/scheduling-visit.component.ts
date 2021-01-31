import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PharmacistService } from 'app/service/entity-handling/pharmacist.service';
import { TimePickerService } from 'app/service/static-data/time-picker.service';


@Component({
  selector: 'app-scheduling-visit',
  templateUrl: './scheduling-visit.component.html',
  styleUrls: ['./scheduling-visit.component.css']
})
export class SchedulingVisitComponent implements OnInit {

  constructor(private tpService: TimePickerService,
    public dialogRef: MatDialogRef<SchedulingVisitComponent>,     
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  dermatolog;
  timeOptions = [];
  ngOnInit() {
    this.timeOptions = this.tpService.getTimeListInIntervalAndExcludeAppointments(this.data.workingHours, this.data.scheduledAppointments);
  }
  onReserve(appointment){
  
    this.dialogRef.close({'start': appointment.start, 'end':appointment.end});  
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
