import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PharmacyService } from 'app/service';
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
  sortedpharmacyList;
  filter = '';
  searchText = new FormControl('');
  searchControl = new FormControl('');
  @Output() emiter = new EventEmitter<string>();
  constructor(private router: Router,
    private pharmacyService: PharmacyService,
    ) { }

  ngOnInit() {
    this.pharmacyList = this.pharmacyService.getAll();
    this.sortedpharmacyList = this.pharmacyList;
  }
  gotoPharmacyPage( pharmacyid ){
    this.emiter.emit(pharmacyid);
  }

  onClick() {    
    this.sortedpharmacyList = new PropFilterPipe().transform(this.pharmacyList, this.searchText.value, 'name');
    if(this.searchControl.value.order === 'asc'){
      sortAsc(this.sortedpharmacyList , this.searchControl.value.prop);
      return;
    }
    sortDesc(this.sortedpharmacyList, this.searchControl.value.prop);

  }
}
