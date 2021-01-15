import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PharmacyService, UserService } from 'app/service';
import { MatDialog } from '@angular/material/dialog';
import { PrescriptionService } from 'app/service/entity-handling/prescription.service';
import { PropFilterPipe } from 'app/shared/pipe/prop-filter.pipe';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})

export class PharmacyComponent implements OnInit {
  constructor(private _Activatedroute: ActivatedRoute,
    private pharmacyService: PharmacyService,
    private prescriptionService: PrescriptionService,  
 ) { }
  @Input() pharmacyId;
  @Input() dataType;
  currentPharmacy;
 
  medicationList;
  sortedMedicines;
  prescrptionList;
  
  searchText = new FormControl('');
  prescriptionCheckControl = new FormControl('');
  pharmacistColumnsIndexes = [ 'name' , 'surname', 'rating'];  
  pharmacistColumnsTitles = { name: 'Ime', surname:'Prezime', rating:'Ocena'};

  ngOnInit() {
    
    this.currentPharmacy = this.pharmacyService.getById(this.pharmacyId);
    this.medicationList = this.pharmacyService.getAvailableMedications(this.pharmacyId);
    this.prescrptionList = this.prescriptionService.getPrescriptionsForUserID(1);  

  }
 
  onSearch() {
    this.sortedMedicines = new PropFilterPipe().transform(this.medicationList, this.searchText.value, 'name');
  }
}
