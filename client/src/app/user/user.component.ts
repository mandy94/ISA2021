import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from 'app/service';
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
  constructor(private userService: UserService,
    private router: Router){}
  ngOnInit() { 
    this.userService.getMyInfo().subscribe(data=> this.user=data);
  }
  view;
  user;
  
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
  showConsultations(){this.router.navigate(['/user-consultations']);}
  showPharamcySearch(){this.view ='pharmacy-search';}
  showMedications(){this.view = 'user-reservations';}
  showPrescriptions(){this.view='user-prescriptions';}
  showPickedPharamcy(){this.view = 'user-pharmacy-page';}
  
  

}
