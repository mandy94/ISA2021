import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PropFilterPipe } from 'app/shared/pipe/prop-filter.pipe';

@Component({
  selector: 'app-user-prescriptions',
  templateUrl: './user-prescriptions.component.html',
  styleUrls: ['./user-prescriptions.component.css']
})
export class UserPrescriptionsComponent implements OnInit {

  constructor() { }
  status = ['Nov', 'Obradjen', 'Odbijen'];
  sortOptions = [{ text: 'Datumu izdavanja - rastucem', prop: 'name', order: 'asc' },
                 { text: 'Datumu izdavanja - opadajucem', prop: 'name', order: 'desc' }]; // itd...
  allPrescriptions = [
    {
      code: 2352,
      pacient: { name: '', surname: '' },
      status: 'Nov',
      date: '01.02.2021',
      medication: {
        id: 1,
        name: 'Andol',
        dosage: '150mg',
        amount: 2
      }
    }, {
      code: 2452,
      pacient: { name: '', surname: '' },
      status: 'Obradjen',
      date: '05.02.2021',
      medication: {
        id: 2,
        name: 'Brufen',
        dosage: '180mg',
        amount: 2
      }
    },
    {
      code: 2152,
      pacient: { name: '', surname: '' },
      status: 'Obradjen',
      date: '03.02.2021',
      medication: {
        id: 10,
        name: 'Bromazepan',
        dosage: '300mg',
        amount: 1
      }
    }];
  prescriptionList=[];
  
  searchPrescriptionsControl = new FormControl('');
  sortControl = new FormControl('');
  ngOnInit() {
  }

  submit() {
    this.prescriptionList = new PropFilterPipe().transform(this.allPrescriptions, this.searchPrescriptionsControl.value, 'status');
  }

}
