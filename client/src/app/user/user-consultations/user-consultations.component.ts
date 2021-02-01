import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from 'app/service';
import { VisitsAndAppointmentsService } from 'app/service/entity-handling/visits-and-appointments.service';
import { isUnder24h } from 'app/shared/utilities/date-and-time.utils';

@Component({
  selector: 'app-user-consultations',
  templateUrl: './user-consultations.component.html',
  styleUrls: ['./user-consultations.component.css']
})
export class UserConsultationsComponent implements OnInit {

  visitTypePicker = new FormControl('');
  requestedData;
  showActions;
  consultationHistoryList;  
  futureConsultationList = [];  
  visitType = [{ text: 'Istorija poseta', option: 1 }, { text: 'Zakazane posete', option: 2 }];

  constructor(private appointmentService: VisitsAndAppointmentsService,
    private userService: UserService) { }
  ngOnInit() {
    this.userService.getMyId().subscribe(id => {      
      this.appointmentService.getHistoryConsultationForPacient(id)
        .subscribe(data => this.consultationHistoryList = data);
      this.appointmentService.getReservedConsultationForPacient(id)
        .subscribe(data => this.futureConsultationList = data);
    });
  }
  onClick() {
    
    if ( this.visitTypePicker.value.option == 1) { // kod dermatologa
      this.requestedData = this.consultationHistoryList;
    }
    if ( this.visitTypePicker.value.option == 2) { // kod dermatologa
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
