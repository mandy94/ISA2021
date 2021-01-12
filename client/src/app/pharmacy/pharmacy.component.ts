import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PharmacyService, UserService } from 'app/service';
import { MatDialog } from '@angular/material/dialog';
import { PrescriptionService } from 'app/service/prescription.service';
import { PropFilterPipe } from 'app/shared/pipe/prop-filter.pipe';
import { SchedulingVisitComponent } from './dialogs/scheduling-visit/scheduling-visit.component';
import { VisitsAndAppointmentsService } from 'app/service/visits-and-appointments.service';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})

export class PharmacyComponent implements OnInit {
  constructor(private _Activatedroute: ActivatedRoute,
    private pharmacyService: PharmacyService,
    private prescriptionService: PrescriptionService,
    private appointmentService: VisitsAndAppointmentsService,
    private userService: UserService,
    private dialog: MatDialog) { }
  @Input() pharmacyId;
  currentPharmacy;
  emplyees;
  medicationList;
  sortedMedicines;
  prescrptionList;
  predefinedAppointments;
  searchText = new FormControl('');
  prescriptionCheckControl = new FormControl('');
  ngOnInit() {
    //let id = parseInt(this._Activatedroute.snapshot.paramMap.get("id"));
    let id = this.pharmacyId;
    this.currentPharmacy = this.pharmacyService.getById(id);
    this.emplyees = this.pharmacyService.getDermatologsByPharmacyId(id);
    this.medicationList = this.pharmacyService.getAvailableMedications(id);
    this.prescrptionList = this.prescriptionService.getPrescriptionsForUserID(1);
   this.showVisits();
    //this.onSearch();

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
  onSearch() {
    this.sortedMedicines = new PropFilterPipe().transform(this.medicationList, this.searchText.value, 'name');
  }
}
