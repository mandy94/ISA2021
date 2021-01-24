import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DermatologService } from 'app/service/entity-handling/dermatolog.service';
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
    @Input() dermatologs;
    @Input() pharmacyId;
    selectedDoctor = undefined;        
    displayedColumns =['name', 'adress'];
    week =['Ponedeljak', 'Utorak', 'Sreda', 'Cetvrtak', 'Petak'];
    finishedRendering = false;
    ngOnInit() {
      
     
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
