import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from 'app/service';
import { VisitsAndAppointmentsService } from 'app/service/entity-handling/visits-and-appointments.service';
import { isUnder24h } from 'app/shared/utilities/date-and-time.utils';

@Component({
  selector: 'app-user-visits',
  templateUrl: './user-visits.component.html',
  styleUrls: ['./user-visits.component.css']
})
export class UserVisitsComponent implements OnInit {
  visitPicker = new FormControl('');
  visitTypePicker = new FormControl('');
  requestedData;
  showActions;
  consultationHistoryList;
  futureVisitList;
  visitHistoryList;
  futureConsultationList = [];
  availableVisits = [{ name: 'Posete kod dermatologa', option: 1 }, { name: 'Savetovanja kod farmaceuta', option: 2 }];
  visitType = [{ text: 'Istorija poseta', option: 1 }, { text: 'Zakazane posete', option: 2 }];

  constructor(private appointmentService: VisitsAndAppointmentsService,
    private userService: UserService) { }
  ngOnInit() {
    this.userService.getMyId().subscribe(id => {
      this.appointmentService.getHistoryVisitsForPacient(id)
        .subscribe(data => this.visitHistoryList = data);
      this.appointmentService.getReservedAppointmentsForPacient(id)
        .subscribe(data => {
          this.futureVisitList = data;
          this.requestedData = data;
        });
      this.appointmentService.getHistoryConsultationForPacient(id)
        .subscribe(data => this.consultationHistoryList = data);
      this.appointmentService.getReservedConsultationForPacient(id)
        .subscribe(data => this.futureConsultationList = data);
    });


  }
  onClick() {
    if (this.visitPicker.value.option == 1 && this.visitTypePicker.value.option == 1) { // kod dermatologa
      this.requestedData = this.visitHistoryList;
    }
    if (this.visitPicker.value.option == 1 && this.visitTypePicker.value.option == 2) { // kod dermatologa
      this.requestedData = this.futureVisitList;
    }
    if (this.visitPicker.value.option == 2 && this.visitTypePicker.value.option == 1) { // kod dermatologa
      this.requestedData = this.consultationHistoryList;
    }
    if (this.visitPicker.value.option == 2 && this.visitTypePicker.value.option == 2) { // kod dermatologa
      this.requestedData = this.futureConsultationList;
    }
    this.visitTypePicker.value.option == 2 ? this.showActions = true : this.showActions = false;
  }
  cancelAppointment(id: number) {
    this.appointmentService.cancelAppointmentWithPharmacist(id)
      .subscribe(data => this.requestedData = data);
  }
  canCanel(item) {
    return !isUnder24h(item.date, item.time);

  }


}
