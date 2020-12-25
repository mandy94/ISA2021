import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { PharmacyDetailsDialogComponent } from 'app/component/dialogs/pharmacy-details-dialog/pharmacy-details-dialog.component';
import { EditDermatologistComponent } from './dialogs/edit-dermatologist/edit-dermatologist.component';

@Component({
  selector: 'app-admin-pharmacy-panel',
  templateUrl: './admin-pharmacy-panel.component.html',
  styleUrls: ['./admin-pharmacy-panel.component.css']
})
export class AdminPharmacyPanelComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }
  selectedPharmacyControl = new FormControl('');
 
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
        id: 2874,
        name: 'Mita',
        birthdate:'12.3.1980',
        adress:'Bul. Oslobodjenja 120, Novi Sad',
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
        }
      },
      { id: 2876,
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
        scheduledAppointments: [
          { date: '10.12.2020.',
            time: '12:00',
            pacient: 'Milan'}
        ]
      }, {
        id: 2878,
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
        ]
     
      }
    ]
  }
  selectedPharmacy =this.dummyPharmacy;
  pharmacySource = this.dummyPharmacy;
  displayedColumns = ['name', 'adress'];
  week = ['Ponedeljak', 'Utorak', 'Sreda', 'Cetvrtak', 'Petak'];
  ngOnInit() {
  }
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  showDetials(item): void {
    this.selectedPharmacy = item;
  }

  selectADoctor(doctor) {
    this.selectedDoctor = doctor;
  }
  editDoctor(doctor){ 
    const dialogRef = this.dialog.open(EditDermatologistComponent, {
      width: '80%',
      data: doctor
    });
  
  }
}


