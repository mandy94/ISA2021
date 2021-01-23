import { Component, Input, OnInit } from '@angular/core';
import { PharmacyService, UserService } from 'app/service';
import { PharmacistService } from 'app/service/entity-handling/pharmacist.service';
import { VisitsAndAppointmentsService } from 'app/service/entity-handling/visits-and-appointments.service';

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
  ) { }

  ngOnInit() {
    this.pharmacyService.getByAvailablePharacistInPharmacy(this.pharmacyId)
      .subscribe(data => {
        this.availablePharmacists = data
      });
    this.userService.getMyId().subscribe(me => { this.pacientId = me });
  }

  createReservation(pharmacistId: number) {
    let requestData = {
      pharmacistId: pharmacistId,
      pharmacyId: this.pharmacyId,
      pacientId: this.pacientId,
      date: this.pharmacyService.pickedDate,
      start: this.pharmacyService.pickedTime.start,
      end: this.pharmacyService.pickedTime.end,
    }
    this.pharmacistService.makeReservationForVisit(requestData).subscribe();

  }
}

