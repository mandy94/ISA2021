import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PharmacyService, UserService } from 'app/service';
import { VisitsAndAppointmentsService } from 'app/service/entity-handling/visits-and-appointments.service';
import { SchedulingVisitComponent } from '../dialogs/scheduling-visit/scheduling-visit.component';

@Component({
  selector: 'app-dermatolog-appointment-reservation',
  templateUrl: './dermatolog-appointment-reservation.component.html',
  styleUrls: ['./dermatolog-appointment-reservation.component.css']
})
export class DermatologAppointmentReservationComponent implements OnInit {
  @Input() pharmacyId;
  dermatologs;
  predefinedAppointments
  constructor( private pharmacyService: PharmacyService,
    private appointmentService: VisitsAndAppointmentsService,
    private userService: UserService, 
    private dialog: MatDialog) { }
  ngOnInit() {    
    this.dermatologs = this.pharmacyService.getDermatologsByPharmacyId(this.pharmacyId); 
    this.showVisits();   
  }
  showVisits(){
    this.predefinedAppointments = this.appointmentService.getMyReservationForPharmacy( this.pharmacyId, 1);
    this.appointmentService.getAvailableAppointmentsForPharmacy(1).forEach( e => this.predefinedAppointments.push(e));
  }
  
  createReservation(appointment) {
    this.userService.getMyInfo().subscribe(data => {
      this.appointmentService.makeReservationForTheAppointment(
        appointment.id, data);
        this.showVisits();
    });
  }
  showAvailableTerm(doctor) {
    const dialogRef = this.dialog.open(SchedulingVisitComponent, {
      width: '550px',
      data: doctor
    });
  }

}
