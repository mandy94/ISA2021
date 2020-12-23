import { Component, OnInit } from '@angular/core';
import { KeysPipe } from 'app/component/pipes/dictionary.pipe';

@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrls: ['./working-hours.component.css']
})
export class WorkingHoursComponent implements OnInit {

  constructor() { }
  doctors = [
    { name: 'Petar' },
    { name: 'Mita' },
    { name: 'Jelena' }
  ]
  pharmacies = [
    { name: 'Dom zdravlja' },
    { name: 'Ambulanta' }
  ]
  week = {
    'Ponedeljak': null,
    'Utorak': null,
    'Sreda': null,
    'Cetvrtak': null,
    'Petak': null,
    'Subota': null,
    'Nedelja': null
  };
  startTime = '';
  endTime = '';
  dayInWeek = '';
  ngOnInit() {
  }
  addTimeToDay(day) {
    console.log('type: ', typeof this.week[this.dayInWeek]); 
    
    if (this.week[this.dayInWeek] != undefined)
      this.week[this.dayInWeek].push({ start: this.startTime, end: this.endTime });
    else
      this.week[this.dayInWeek] = [{ start: this.startTime, end: this.endTime }];
  }
}
