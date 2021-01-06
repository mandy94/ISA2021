import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { isUnder24h } from 'app/shared/utilities/date-and-time.utils';

@Component({
  selector: 'app-user-visits',
  templateUrl: './user-visits.component.html',
  styleUrls: ['./user-visits.component.css']
})
export class UserVisitsComponent implements OnInit {

  constructor() { }
  availableVisits = [{ name: 'Posete kod dermatologa', option: 1 }, { name: 'Savetovanja kod farmaceuta', option: 2 }];
  visitType = [ {text: 'Istorija poseta', option:1 }, {text:'Zakazane posete', option:2}];
  requestedData; 
  visitPicker = new FormControl('');
  visitTypePicker = new FormControl('');
  visitHistoryList = [
  {
    date: '06.1.2021',
    time: '10:00',
    id: 2,
    description: 'Redovna kontrola',
    duration: { value: 1, unit: 'h' },
    price: 0
  },
  {
    date: '07.1.2021',
    time: '19:00',
    id: 3,
    description: 'Kratki pregled kicme 2 ',
    duration: { value: 1, unit: 'h' },
    price: 0
  }]; // dummy data
  consultationVisitList = [  { // kod farmaceuta
    date: '08.1.2021',
    time: '10:00',
    id: 1,
    description: 'Savetovanje o painkilerima',
    duration: { value: 1, unit: 'h' },
    price: 0
  }]; // dummy data 2]
  futureVisitList = [{
    date: '23.1.2021',
    time: '10:00',
    id: 1,
    description: 'Kratki pregled kicme',
    duration: { value: 2, unit: 'h' },
    price: 1200
  },  
  {
    date: '27.1.2020',
    id: 5,
    description: 'Kratki pregled kicme',
    duration: { value: 1, unit: 'h' },
    price: 1800
  }];
  showActions;
  futureConsultationList=[];
  ngOnInit() {
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
     return isUnder24h(item.date, item.time);
    
  }
 

}
