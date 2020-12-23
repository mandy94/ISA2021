import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  user = {
  fullName : 'Petar Petrovic',
  JMBG: 745103741223,
  birthdate: '12.03.1990',
  alergies: ['Soja', 'Gluten'],
  loyalty : {
    points: 23,
    category: 'Silver',
    availableDiscounts: 'Neke sa strane'
  }
  }
  ngOnInit() {
  }

}
