import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DermatologService } from 'app/service/entity-handling/dermatolog.service';
import { PacientService } from 'app/service/entity-handling/pacient.service';
import { VisitsAndAppointmentsService } from 'app/service/entity-handling/visits-and-appointments.service';
import { Appointment, AppointmentDTO } from 'app/shared/models/entitis/appointment.model';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  
  newAppointment = new FormGroup({
    name : new FormControl(''),
    price: new FormControl(''),
    pacient : new FormControl(''),
    dermatolog : new FormControl(''),
    date : new FormControl(''),
    startHours: new FormControl(''),
    startMinuts: new FormControl(''),
    endHours: new FormControl(''),
    endMinuts: new FormControl(''),
  });
  pacientList;
  dermotologList;
  constructor(
    public dialogRef: MatDialogRef<CreateAppointmentComponent>,
    private dermologService: DermatologService,
    private pacientService: PacientService,
    private appointmentService: VisitsAndAppointmentsService,
    @Inject(MAT_DIALOG_DATA) public doctor: any) { }

  ngOnInit() {
    this.pacientList = this.pacientService.getAll();
    this.dermotologList = [];
  }
  submit(){
    let app = new Appointment(this.newAppointment.value);
    this.appointmentService.addNewAppointment(app)

  }
}
