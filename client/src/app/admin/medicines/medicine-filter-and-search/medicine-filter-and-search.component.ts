import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MedicationStockDialogComponent } from 'app/component/dialogs/medication-stock-dialog/medication-stock-dialog.component';
import { MedicineFilterPipe } from 'app/component/pipes/medicine-filter.pipe';


@Component({
  selector: 'app-medicine-filter-and-search',
  templateUrl: './medicine-filter-and-search.component.html',
  styleUrls: ['./medicine-filter-and-search.component.css']
})
export class MedicineFilterAndSearchComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
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
    { name: 'Borodual', dose: 2, rating: 1, id: 5,type:'tableta',stock:[
      this.pharmacy1, this.pharmacy2, this.pharmacy3,  this.pharmacy4
    ] }
  ]
  sortIdUp = false;
  sortNameUp = false;
  sortRatingUp = false;

  sortById() {
    if (this.sortIdUp)
      this.sortedMedicines = this.sortedMedicines.sort((a, b) => a.id - b.id);
    else
      this.sortedMedicines = this.sortedMedicines.sort((a, b) => b.id - a.id);
    this.sortIdUp = !this.sortIdUp;
  }
  sortByName() {
    if (this.sortNameUp)
      this.sortedMedicines = this.sortedMedicines.sort((a, b) => a.name.localeCompare(b.name));
    else
      this.sortedMedicines = this.sortedMedicines.sort((a, b) => b.name.localeCompare(a.name));
    this.sortNameUp = !this.sortNameUp;
  }
  sortByRating() {
    if (this.sortRatingUp)
      this.sortedMedicines = this.sortedMedicines.sort((a, b) => a.rating - b.rating);
    else
      this.sortedMedicines = this.sortedMedicines.sort((a, b) => b.rating - a.rating);
    this.sortRatingUp = !this.sortRatingUp;
  }
  onClick() {
    this.filter = this.searchText.value;
    this.sortedMedicines = new MedicineFilterPipe().transform(this.characters, this.searchText.value);


  }
  checkStock(item){
    const dialogRef = this.dialog.open(MedicationStockDialogComponent, {
      width: '450px',
      data: item
    });
    
  }
  clear() {
    this.sortedMedicines = null;
    this.searchText.setValue('');
  }
  trackItem(index, item) {
    return this.sortedMedicines ? this.sortedMedicines : undefined;
  }
  ngOnInit() {
  }
  checkInput() {
    return this.searchText.value === '' ? true : false;
  }
}
