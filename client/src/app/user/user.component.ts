import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { PropFilterPipe } from 'app/shared/pipe/prop-filter.pipe';
import { stringify } from 'querystring';
import { AddAlergenComponent } from './dialogs/add-alergen/add-alergen.component';
import { EditUsersInfoComponent } from './dialogs/edit-users-info/edit-users-info.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  pickedPharmacyId;
  whatToShow;
  constructor(private router: Router){}
  ngOnInit() {
  
  }
  view = 'pharmacy-search';
  user = {
    basicInfo: {
      name: 'Petar',
      surname: 'Petrovic',
      JMBG: 745103741223,
      birthdate: '10-03-1980',
      email: 'pera@gmail.com'
    },
    alergies: [{ id: 1, name: 'Soja' }],
    loyalty: {
      points: 23,
      category: 'Silver',
      availableDiscounts: 'Neke sa strane'
    }
  }
  
  gotoPharmacyPage($event){
    this.showPickedPharamcy();   
    this.whatToShow = 'Dermatologs'; 
    this.pickedPharmacyId = $event;
    
  }
  gotoPharmacistPage($event){
    this.showPickedPharamcy();    
    this.whatToShow ='Pharmacists';
    this.pickedPharmacyId = $event;
    // plus jos neesto
    
  }
  showVisits(){ this.router.navigate(['/user-visits']);}
  showConsultations(){}
  showPharamcySearch(){this.view ='pharmacy-search';}
  showMedications(){this.view = 'user-reservations';}
  showPrescriptions(){this.view='user-prescriptions';}
  showPickedPharamcy(){this.view = 'user-pharmacy-page';}
  
  

}
