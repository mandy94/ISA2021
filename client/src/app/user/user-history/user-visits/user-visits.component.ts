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

  availableVisits = [{ name: 'Posete kod dermatologa', option: 1 }, { name: 'Savetovanja kod farmaceuta', option: 2 }];
  visitType = [ {text: 'Istorija poseta', option:1 }, {text:'Zakazane posete', option:2}];
  visitPicker = new FormControl('');
  visitTypePicker = new FormControl('');
  requestedData; 
  showActions;  
  consultationVisitList = [  { // kod farmaceuta
    date: '08.1.2021',
    time: '10:00',
    id: 1,
    description: 'Savetovanje o painkilerima',
    duration: { value: 1, unit: 'h' },
    price: 0
  }]; // dummy data 2]
  futureVisitList;
  visitHistoryList;
  futureConsultationList=[];

  constructor( private appointmentService: VisitsAndAppointmentsService,
    private userService: UserService) { }
  ngOnInit() {
    this.userService.getMyId().subscribe( id => {
      this.visitHistoryList = this.appointmentService.getHistoryVisitsForPacient(id),
      this.futureVisitList = this.appointmentService.getScheduledAppointmentsForPacient(id)});
    
  }
  onClick() {
    if (this.visitPicker.value.option == 1 && this.visitTypePicker.value.option == 1) { // kod dermatologa
     this.requestedData = this.visitHistoryList;
    }
    if (this.visitPicker.value.option == 1 && this.visitTypePicker.value.option == 2) { // kod dermatologa
      this.requestedData = this.futureVisitList;
     } 
     if (this.visitPicker.value.option == 2 && this.visitTypePicker.value.option == 1) { // kod dermatologa
      this.requestedData = this.consultationVisitList;
     } 
     if (this.visitPicker.value.option == 2 && this.visitTypePicker.value.option == 2) { // kod dermatologa
      this.requestedData = this.futureConsultationList;
     } 
     this.visitTypePicker.value.option == 2? this.showActions = true : this.showActions = false;
  }
  
  canCanel(item){
     return !isUnder24h(item.date, item.time);
    
  }
 

}
