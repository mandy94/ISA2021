import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { PharmacyService } from 'app/service';
import { PharmacistService } from 'app/service/entity-handling/pharmacist.service';
import { VisitsAndAppointmentsService } from 'app/service/entity-handling/visits-and-appointments.service';
import { CreateAppointmentComponent } from '../../dialogs/create-appointment/create-appointment.component';

@Component({
  selector: 'app-appointments-tab',
  templateUrl: './appointments-tab.component.html',
  styleUrls: ['./appointments-tab.component.css']
})
export class AppointmentsTabComponent implements OnInit {
  @Input() myId;
  constructor(public dialog: MatDialog,
    private appointmentsService: VisitsAndAppointmentsService,
    private pharamcyService: PharmacyService) { }
  searchText = new FormControl('');
  currentPharmacy;
  scheduledAppointments;

  ngOnInit() {
    console.log(this.myId)
    this.currentPharmacy = this.pharamcyService.getMyPharamcy(this.myId);
    this.scheduledAppointments = this.appointmentsService.getAllAppointmentsForPharmacy(this.currentPharmacy.id);
  }
  addNewAppointment(){   
      const dialogRef = this.dialog.open(CreateAppointmentComponent, {
        width: '550px',
        data: {}
      });
  
  }
  edit(item) { }
  onClick() { }
}
