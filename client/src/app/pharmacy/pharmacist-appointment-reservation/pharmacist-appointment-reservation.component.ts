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
  @Input() pickedDate;
  @Input() pickedTimes;
  availablePharmacists;
  constructor(private pharmacyService: PharmacyService,
    private pharmacistService: PharmacistService,
    private userService: UserService,
   ) { }

  ngOnInit() {
    this.availablePharmacists = this.pharmacyService.getPharmacistsByPharmacyId(this.pharmacyId);
  }
 
  createReservation(pharmacistId: number) {
    this.userService.getMyId().subscribe(me => {
      this.pharmacistService.makeReservationForVisit(
       pharmacistId, me.id,  this.pickedDate, this.pickedTimes);      
    });
  }
}
