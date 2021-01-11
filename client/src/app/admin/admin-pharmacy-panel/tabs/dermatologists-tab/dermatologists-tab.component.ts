import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DermatologService } from 'app/service/dermatolog.service';
import { EditDermatologistComponent } from '../../dialogs/edit-dermatologist/edit-dermatologist.component';

@Component({
  selector: 'app-dermatologists-tab',
  templateUrl: './dermatologists-tab.component.html',
  styleUrls: ['./dermatologists-tab.component.css']
})
export class DermatologistsTabComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router,
    private dermatologService: DermatologService) { }
  selectedPharmacyControl = new FormControl('');

  selectedDoctor = undefined;
  currentPharmacy = {
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
    ]};
    pharmacySource;// = this.currentPharmacy;
    displayedColumns =['name', 'adress'];
    week =['Ponedeljak', 'Utorak', 'Sreda', 'Cetvrtak', 'Petak'];
    ngOnInit() {

      this.currentPharmacy['doctors'] = this.dermatologService.getByPharmacyId(this.currentPharmacy.id);
    }
 
  selectADoctor(doctor) {
      this.selectedDoctor = doctor;
    }
  editDoctor(doctor) {
      const dialogRef = this.dialog.open(EditDermatologistComponent, {
        width: '80%',
        data: doctor
      });

    }
  }
