import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { PharmacyDetailsDialogComponent } from 'app/component/dialogs/pharmacy-details-dialog/pharmacy-details-dialog.component';

@Component({
  selector: 'app-admin-pharmacy-panel',
  templateUrl: './admin-pharmacy-panel.component.html',
  styleUrls: ['./admin-pharmacy-panel.component.css']
})
export class AdminPharmacyPanelComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }
  selectedPharmacyControl = new FormControl('');
  selectedPharmacy;
  selectedDoctor = undefined;
  dummyPharmacy = {
    id: 2,
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
        workingTime: [
          {
            day: 'Ponedeljak',
            time: { start: '8:00', end: '10:00' }
          },
          {
            day: 'Utorak',
            time: { start: '8:00', end: '10:00' }
          },
          {day:'Sreda'},
          {day:'Cetvrtak'},
          {day:'Petak'},
          {day:'Subota'},
          {day:'Nedelja'}
        ],
        vacation: {
          startDate: '20.07.2020',
          endDate: '10.08.2020',
        },
        scaheduledAppointments: []
      },
      {
        name: 'Jova',
        workingTime: [
          {
            day: 'Ponedeljak',
            time: { start: '8:00', end: '10:00' }
          },
          {day:'Utorak'},
          {
            day: 'Sreda',
            time: { start: '8:00', end: '10:00' }
          },    {day:'Cetvrtak'},
          {day:'Petak'},
          {day:'Subota'},
          {day:'Nedelja'}
        ],
        scaheduledAppointments: []
      }, {
        name: 'Dragan',
        workingTime: [
          { day:'Ponedeljak'},
          {
            day: 'Utorak',
            time: { start: '8:00', end: '10:00' }
          }, {
            day: 'Cetvrtak',
            time: { start: '8:00', end: '10:00' }
          },
          {day:'Sreda'},         
          {day:'Petak'},
          {day:'Subota'},
          {day:'Nedelja'}
        ],
        scaheduledAppointments: []
      }
    ]
  }
  dummyPharmacy2 = {
    id: 1,
    name: 'Jankovic apoteka',
    adress: 'Bul. Evrope 15',
    description: 'Drugi pois',
    availableServices: [
      { name: 'Ultrazvuk', price: 350 }
    ],
    medications: [
      { name: 'Febricet', price: 230 }
    ],
    farmacists: [],
    doctors: []
  }
  pharmacySource = [this.dummyPharmacy, this.dummyPharmacy2];
  displayedColumns = ['name', 'adress'];
  week = ['Ponedeljak', 'Utorak', 'Sreda', 'Cetvrtak', 'Petak'];
  ngOnInit() {
  }
  showDetials(item): void {
    this.selectedPharmacy = item;

  }

  selectADoctor(doctor) {
    this.selectedDoctor = doctor;
  }
}


