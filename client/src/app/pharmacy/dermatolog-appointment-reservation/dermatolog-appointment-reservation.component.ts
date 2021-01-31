import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from 'app/service';
import { PharmacyService } from 'app/service/entity-handling/pharmacy.service';
import { VisitsAndAppointmentsService } from 'app/service/entity-handling/visits-and-appointments.service';
import { ConfirmationDialogComponent } from 'app/shared/dialogs/confirmation-dialog/confirmation-dialog.component';
import { SchedulingVisitComponent } from '../dialogs/scheduling-visit/scheduling-visit.component';

@Component({
  selector: 'app-dermatolog-appointment-reservation',
  templateUrl: './dermatolog-appointment-reservation.component.html',
  styleUrls: ['./dermatolog-appointment-reservation.component.css']
})
export class DermatologAppointmentReservationComponent implements OnInit {
  @Input() pharmacyId: number;
  dermatologs;
  predefinedAppointments
  constructor(private pharmacyService: PharmacyService,
    private appointmentService: VisitsAndAppointmentsService,
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog) { }
  ngOnInit() {
    this.dermatologs = this.pharmacyService.getDermatologsByPharmacyId(this.pharmacyId);
    this.showVisits();
  }
  showVisits() {
    this.predefinedAppointments = []; //this.appointmentService.getMyReservationAtPharmacy( this.pharmacyId, 1);
    this.appointmentService.getAvailableAppointmentsForPharmacy(this.pharmacyId).subscribe(data => this.predefinedAppointments = data);
  }

  createReservation(appointment) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '650px',
      data: { maintext: 'Da li ste sigurni da zelite da rezervisete pregled ?' }
    });
    let that = this;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        that.appointmentService.makeReservationForTheAppointment(
          appointment.id, this.userService.currentUser.id).subscribe(() =>
            that.router.navigate(['/user-visits']));

      }
    });

  }
 

}
