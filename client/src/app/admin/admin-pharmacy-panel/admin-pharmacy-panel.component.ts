import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { PharmacyDetailsDialogComponent } from 'app/component/dialogs/pharmacy-details-dialog/pharmacy-details-dialog.component';

@Component({
  selector: 'app-admin-pharmacy-panel',
  templateUrl: './admin-pharmacy-panel.component.html',
  styleUrls: ['./admin-pharmacy-panel.component.css']
})
export class AdminPharmacyPanelComponent implements OnInit {

  constructor(public dialog:MatDialog) { }
  selectedPharmacyControl = new FormControl('');
  selectedPharmacy;
  dummyPharmacy = {
    id : 2,
    name: 'Apoteka dobro srce',
    adress: 'Radnicka 23, Novi Sad',
    description: 'Neki opis apoteke',
    availableServices: [
      { name: 'Ultrazvuk', price: 3400 },
      { name: 'Redovan pregled', price: 1000 }
    ],
    medications: [
      { name: 'Brufen', price: 450 },
      { name: 'Panklav', price: 350 },
      { name: 'Paracetamol', price: 300 },
    ],
    farmacists: [
      {
        name: 'Jelena'
      }
    ],
    doctors: [
      {
        name: 'Mita',
        workingTime: {
          'Ponedeljak': [{ start: '8:00', end: '10:00' }],
          'Utorak': [{ start: '8:00', end: '10:00' }]
        },
        scaheduledAppointments: []
      }
    ]
  }
  dummyPharmacy2 ={
    id: 1,
    name: 'Jankovic apoteka',
    adress: 'Bul. Evrope 15',
    description: 'Drugi pois',
    availableServices: [
      {name: 'Ultrazvuk', price: 350}
    ],
    medications:[
      {name: 'Febricet', price: 230}
    ],
    farmacists:[],
    doctors:[]
  }
  pharmacySource = [this.dummyPharmacy, this.dummyPharmacy2];
  displayedColumns = ['name', 'adress'];
  ngOnInit() {
  }
  showDetials(item): void {
    this.selectedPharmacy = item;

  }

}


