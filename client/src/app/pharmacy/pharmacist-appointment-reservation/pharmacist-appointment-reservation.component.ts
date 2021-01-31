import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'app/service';
import { PharmacyService } from 'app/service/entity-handling/pharmacy.service';
import { PharmacistService } from 'app/service/entity-handling/pharmacist.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SchedulingVisitComponent } from '../dialogs/scheduling-visit/scheduling-visit.component';
import { Period } from 'app/shared/models/Period';

@Component({
  selector: 'app-pharmacist-appointment-reservation',
  templateUrl: './pharmacist-appointment-reservation.component.html',
  styleUrls: ['./pharmacist-appointment-reservation.component.css']
})
export class PharmacistAppointmentReservationComponent implements OnInit {
  @Input() pharmacyId;

  availablePharmacists;
  pacientId;
  constructor(private pharmacyService: PharmacyService,
    private pharmacistService: PharmacistService,
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.pharmacyService.getByAvailablePharacistInPharmacy(this.pharmacyId)
      .subscribe(data => {
        this.availablePharmacists = data;
      });
    this.userService.getMyInfo();
  }

  showAvailableTerm(doctor) {
    let dialogRef

    this.pharmacistService.getReservedConsultationsByDate(doctor.employee.id, this.pharmacyService.getPickedDate())
      .subscribe(scheduledAppointments => {
        dialogRef = this.dialog.open(SchedulingVisitComponent, {
          width: '550px',
          data: {
            "workingHours": {
              start: doctor.startTime,
              end: doctor.endTime
            },
            "scheduledAppointments": scheduledAppointments

          }
        });
        dialogRef.afterClosed().subscribe(result => {
          if(result){
            this.createReservation(doctor.employee.id, result);
            this.router.navigate(['/user-visits']);
          }
        });
      });
     

  }
  createReservation(pharmacistId: number, newPeriod: Period) {
    let requestData = {
      pharmacistId: pharmacistId,
      pharmacyId: this.pharmacyId,
      pacientId: this.userService.currentUser.id,
      date: this.pharmacyService.pickedDate,
      start: newPeriod.start,
      end: newPeriod.end,
    }
    this.pharmacistService.makeReservationForVisit(requestData).subscribe();

  }
}

