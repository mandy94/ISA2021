import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-services-tab',
  templateUrl: './services-tab.component.html',
  styleUrls: ['./services-tab.component.css']
})
export class ServicesTabComponent implements OnInit {

  constructor() { }
  searchText = new FormControl('');
  dummyPharmacy = {
    id: 2,
    name: 'Apoteka dobro srce',
    adress: 'Radnicka 23, Novi Sad',
    description: 'Neki opis apoteke'}
    selectedPharmacy =this.dummyPharmacy;
  availableServices=  [
    {id:1, name: 'Ultrazvuk', price: 3400 },
    { id:2 , name: 'Redovan pregled', price: 1000 }
  ]
  ngOnInit() {
  }
  edit(item){}
  onClick(){}
}
