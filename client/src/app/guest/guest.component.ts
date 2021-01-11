import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MedicationStockDialogComponent } from 'app/component/dialogs/medication-stock-dialog/medication-stock-dialog.component';
import { PropFilterPipe } from 'app/shared/pipe/prop-filter.pipe';
import { sortAsc, sortDesc } from 'app/shared/utilities/collection.utils';


@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {


  showResult = true;
  sortCriteria = '';
  searchText = new FormControl('');
  filter = '';
  searchRating = 2;
  sortedMedicines; // result
  pharmacy1 = {name:'Jankovic apoteka', adress:'Radnicka 23'};
  pharmacy2 = {name:'Jankovic apoteka', adress:'Glavna bb'};
  pharmacy3 = {name:'Benu apoteka', adress:'Somborski bulevar 2a'};
  pharmacy4 = {name:'JMeni+', adress:'Bul. Janka Milovoja 105'};
  characters = [
    { name: 'Andol', dose: 2, rating: 1, id: 1 ,type:'tableta', stock: [
      this.pharmacy1, this.pharmacy2
    ]},
    { name: 'Brufen', dose: 2, rating: 5, id: 2 ,type:'sirup', stock:[
      this.pharmacy3
    ]},
    { name: 'Febricet', dose: 2, rating: 2, id: 3 ,type:'tableta', stock:[]},
    { name: 'Tritiko', dose: 2, rating: 3, id: 4,type:'pilula', stock:[] },
    { name: 'Borodual', dose: 2, rating: 1, id: 5,type:'tableta', sstock:[
      this.pharmacy1, this.pharmacy2, this.pharmacy3,  this.pharmacy4
    ] }
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {}
  

  isAscending = true;
  sortProp = 'id';

  onSearch(){
    this.sortedMedicines = new PropFilterPipe().transform(this.characters, this.searchText.value, 'name');
  }
  onSortBy(prop: string) {
    this.isAscending = this.sortProp !== prop ? true : !this.isAscending; 
    this.sortProp = prop;   
    this.sortedMedicines = this.isAscending ? sortAsc(this.sortedMedicines, prop) : sortDesc(this.sortedMedicines, prop);
  }

  clear() {
    this.sortedMedicines = null;
    this.searchText.setValue('');
  }

  checkInput() {
    return this.searchText.value === '' ? true : false;
  }

  checkStock(item){
    const dialogRef = this.dialog.open(MedicationStockDialogComponent, {
      width: '450px',
      data: item
    });
    
  }

}
