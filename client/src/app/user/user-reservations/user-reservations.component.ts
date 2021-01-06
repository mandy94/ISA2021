import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { isOver24h } from 'app/shared/utilities/date-and-time.utils';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {

  constructor() { }
  reservedMedicine = [
    {
      id: 1,
      name: 'Andol',
      reservation: { date: '06.01.2021', time: '11:00'}
    }
  ]
  searchControl = new FormControl('');
  searchOptions = ['Svi lekovi', 'Rezervisani', 'Za podici'];
  ngOnInit() {
  }
  submit  
  canCanel(item){
    return isOver24h(item.date, item.time);   
 }


}
