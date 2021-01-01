import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MedicineFilterPipe } from 'app/shared/pipe/medicine-filter.pipe';

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
  pharmacyList = [{ name: 'Medicine Alcove', rating : 1 },
                   { name: 'Therapy Signs', rating : 3 }, 
                   { name: 'Therapy Aloe', rating : 4 }, 
                   { name: 'Medicinecy', rating : 1 }, 
                   { name: 'Choice Medication', rating : 2 },
                   { name: 'We Medication', rating : 5 }, 
                   { name: 'Pharmacyous' , rating : 5}, 
                   { name: 'Medical All' , rating : 2},
                   { name: 'Medicine Hop', rating : 1 }];
  sortedpharmacyList;
  filter = '';
  searchText = new FormControl('');
  searchControl = new FormControl('');
  constructor() { }

  ngOnInit() {
    this.sortedpharmacyList = this.pharmacyList;
  }
  trackItem(index, item) {
    return this.sortedpharmacyList ? this.sortedpharmacyList : undefined;
  }

  sortResult(prop, order) {
    if (order === 'asc'){
      this.sortedpharmacyList = this.sortedpharmacyList.sort((a, b) => this.abstractSort(a[prop], b[prop]));        
    }else{
      this.sortedpharmacyList = this.sortedpharmacyList.sort((a, b) => this.abstractSort(b[prop], a[prop]));
    }
  }
  abstractSort(first, second){
    if( typeof first  === "string"){
        return first.localeCompare(second)
    }else if( typeof first === "number"){
      return first - second;
    }

  }
  onClick() {
    this.filter = this.searchText.value;
    this.sortedpharmacyList = new MedicineFilterPipe().transform(this.pharmacyList, this.searchText.value);

    this.sortResult(this.searchControl.value.prop, this.searchControl.value.order);

  }
}
