import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-pharmacy-panel',
  templateUrl: './admin-pharmacy-panel.component.html',
  styleUrls: ['./admin-pharmacy-panel.component.css']
})
export class AdminPharmacyPanelComponent implements OnInit {

  constructor() { }
  dummyPharmacy = {
    id: 2,
    name: 'Apoteka dobro srce',
    adress: 'Radnicka 23, Novi Sad',
    description: 'Neki opis apoteke'}
    selectedPharmacy =this.dummyPharmacy;
  ngOnInit(): void {
 
  }
 
}


