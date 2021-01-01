import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-visits',
  templateUrl: './user-visits.component.html',
  styleUrls: ['./user-visits.component.css']
})
export class UserVisitsComponent implements OnInit {

  constructor() { }
  availableVisits = [{ name: 'Posete kod dermatologa', option: 1 }, { name: 'Savetovanja kod farmaceuta', option: 2 }];
  visitHistoryList;
  visitPicker = new FormControl('');
  onClick() {
    if (this.visitPicker.value == 1) {
      this.visitHistoryList = [{
        date: '23.1.2020',
        duration: { value: 2, unit: 'h' },
        price: 1200
      },
      {
        date: '24.1.2020',
        duration: { value: 1, unit: 'h' },
        price: 0
      },
      {
        date: '27.1.2020',
        duration: { value: 1, unit: 'h' },
        price: 1800
      }]; // dummy data
    } else {
      this.visitHistoryList = ['10.2.2019']; // dummy data
    }
  }

  ngOnInit() {
  }

}
