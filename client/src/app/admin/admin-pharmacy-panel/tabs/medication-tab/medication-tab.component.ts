import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MedicineFilterPipe } from 'app/shared/pipe/medicine-filter.pipe';
import { EditMedicationComponent } from '../../dialogs/edit-medication/edit-medication.component';

@Component({
  selector: 'app-medication-tab',
  templateUrl: './medication-tab.component.html',
  styleUrls: ['./medication-tab.component.css']
})
export class MedicationTabComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  val  =3;
  sortedMedicines; // result
  filter = '';
  searchText = new FormControl('');
  pharmacy = {
    medications:[
      {
        name: 'Andol', dose: 2, rating: 1, id: 1, type: 'tableta', dosage:'10mg', stock:2
      },
      {
        name: 'Andol', dose: 2, rating: 1, id: 6, type: 'tableta', dosage:'150mg', stock:2
      },
      {
        name: 'Brufen', dose: 2, rating: 5, id: 2, type: 'sirup', dosage:'10mg', stock:2
      },
      { name: 'Febricet', dose: 2, rating: 2, id: 3, type: 'tableta', stock: undefined, dosage:'10mg'},
      { name: 'Tritiko', dose: 2, rating: 3, id: 4, type: 'pilula', stock: undefined , dosage:'10mg'},
      { name: 'Borodual', dose: 2, rating: 1, id: 5, type: 'tableta', dosage:'10mg' , stock:2}
    ]
  }
  ngOnInit() {
    this.sortedMedicines = this.pharmacy.medications;
  }
  trackItem(index, item) {
    return this.sortedMedicines ? this.sortedMedicines : undefined;
  }
  checkInput() {
    return this.searchText.value === '' ? true : false;
  }
  edit( item){
    const dialogRef = this.dialog.open(EditMedicationComponent, {
      width: '550px',
      data:  item
    });
  }
  onClick() {
    this.filter = this.searchText.value;
    this.sortedMedicines = new MedicineFilterPipe().transform(this.pharmacy.medications, this.searchText.value);
  }
}
