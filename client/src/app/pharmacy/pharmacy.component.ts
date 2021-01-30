import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'app/service';

import { PharmacyService } from 'app/service/entity-handling/pharmacy.service';

import { PrescriptionService } from 'app/service/entity-handling/prescription.service';
import { PropFilterPipe } from 'app/shared/pipe/prop-filter.pipe';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})

export class PharmacyComponent implements OnInit {
  constructor(private _Activatedroute: ActivatedRoute,
    private userService: UserService,
    private pharmacyService: PharmacyService,
    private prescriptionService: PrescriptionService,
  ) { }
  @Input() pharmacyId;
  @Input() dataType;

  currentPharmacy={};
  myId;

  medicationList;
  sortedMedicines;
  prescrptionList =[];

  searchText = new FormControl('');
  prescriptionCheckControl = new FormControl('');
  pharmacistColumnsIndexes = ['name', 'surname', 'rating'];
  pharmacistColumnsTitles = { name: 'Ime', surname: 'Prezime', rating: 'Ocena' };

  ngOnInit() {
    let arr = []
    this.userService.getMyId()
      .subscribe( data =>{
        this.myId =data;
        this.prescriptionService.getPrescriptionsByPacientIdForSearch(this.myId)
        .subscribe(data => {
          data.forEach(el => {
            let temp = {
              id: el.id,
              code: el.code,
              pacient: el.pacient,
              date: el.date,
              medicine: {}
            };
            el.itemMedicine.forEach(med => {
              temp.medicine = med;          
              this.prescrptionList.push(JSON.parse(JSON.stringify(temp))); 
            });
          });    
        });
        // .subscribe(data =>this.prescrptionList =data);
      });
    this.pharmacyService.getById(this.pharmacyId)
      .subscribe(data => this.currentPharmacy = data);
    this.pharmacyService.getMedicationsByPharmacyId(this.pharmacyId)
      .subscribe(data => this.medicationList = data);
   

    //  

  }

  onSearch() {
    this.sortedMedicines = new PropFilterPipe().transform(this.medicationList, this.searchText.value, 'name');
  }
}
