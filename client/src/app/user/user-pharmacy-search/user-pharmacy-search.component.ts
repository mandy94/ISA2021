import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PharmacyService } from 'app/service/entity-handling/pharmacy.service';
import { TimePickerService } from 'app/service/static-data/time-picker.service';

import { PropFilterPipe } from 'app/shared/pipe/prop-filter.pipe';
import { sortAsc, sortDesc } from 'app/shared/utilities/collection.utils';

@Component({
  selector: 'app-user-pharmacy-search',
  templateUrl: './user-pharmacy-search.component.html',
  styleUrls: ['./user-pharmacy-search.component.css']
})
export class UserPharmacySearchComponent implements OnInit {

  sortOptions = [ { text: 'Nazivu - rastucem', prop: 'name', order: 'asc' },
                  { text: 'Nazivu - opadajucem', prop: 'name', order: 'desc' },
                  { text: 'Gradu', prop: 'adress' },
                  { text: 'Oceni', prop: 'rating' }]; // itd...
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
  pharmacyList;
  timeList;
  sortedpharmacyList;
  filter = '';
  ifAdvancedSearch=false;
  searchText = new FormControl('');
  searchControl = new FormControl('');  
  dateControl = new FormControl('');
  timeControl = new FormControl('');
  
  @Output() pharamcyEmiter = new EventEmitter<string>();
  @Output() pharmacistEmiter = new EventEmitter<string>();
  
  constructor(private router: Router,
    private pharmacyService: PharmacyService,
    private timePickerService: TimePickerService
    ) { }

  ngOnInit() {
    this.pharmacyService.getAll().subscribe(data => this.pharmacyList = data);
    //this.sortedpharmacyList = this.pharmacyList;
    this.timeList = this.timePickerService.getTimeListByH();
  }
  gotoPharmacyPage( pharmacyid ){
  
    this.pharamcyEmiter.emit(pharmacyid);
  }
  gotoPharmacistPage(pharmacyid){
    this.pharmacistEmiter.emit(pharmacyid);
  }

  onPharmacistSearch(){
    let date, time;
    date = this.dateControl.value;
    time = this.timeControl.value;
    this.pharmacyService.storeData(time, date.toLocaleString());    
    this.pharmacyService.getPharmaciesByAvailablePharamcistsOnDateAndTime(date, time)
        .subscribe( data => this.sortedpharmacyList = data);
    this.ifAdvancedSearch=true;
  }
  onPharmacySearch() {      
    this.sortedpharmacyList = new PropFilterPipe().transform(this.pharmacyList, this.searchText.value, 'name');
    if(this.searchControl.value.order === 'asc'){
      sortAsc(this.sortedpharmacyList , this.searchControl.value.prop);
      return;
    }
    sortDesc(this.sortedpharmacyList, this.searchControl.value.prop);
    this.ifAdvancedSearch=false;
    
  }
  canSearch(){
    if( this.dateControl.value != '' && this.timeControl.value != '')
      return true;
    return false;
  }
}
