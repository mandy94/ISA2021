import { Component, Input, OnInit } from '@angular/core';
import {  UserService } from 'app/service';
import { PharmacyService } from 'app/service/entity-handling/pharmacy.service';
import { PharmacistService } from 'app/service/entity-handling/pharmacist.service';

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
        this.availablePharmacists = data;
      });
    this.userService.getMyInfo();
  }

  createReservation(pharmacistId: number) {
    let requestData = {
      pharmacistId: pharmacistId,
      pharmacyId: this.pharmacyId,
      pacientId: this.userService.currentUser.id,
      date: this.pharmacyService.pickedDate,
      start: this.pharmacyService.pickedTime.start,
      end: this.pharmacyService.pickedTime.end,
    }
    this.pharmacistService.makeReservationForVisit(requestData).subscribe();

  }
}

