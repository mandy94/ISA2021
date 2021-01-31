import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from 'app/service';
import { PrescriptionService } from 'app/service/entity-handling/prescription.service';

import { PropFilterPipe } from 'app/shared/pipe/prop-filter.pipe';

@Component({
  selector: 'app-user-prescriptions',
  templateUrl: './user-prescriptions.component.html',
  styleUrls: ['./user-prescriptions.component.css']
})
export class UserPrescriptionsComponent implements OnInit {

  constructor(private prescriptionService: PrescriptionService,
    private userService: UserService) { }
  status = ['Nov', 'Obradjen', 'Odbijen'];
  sortOptions = [{ text: 'Datumu izdavanja - rastucem', prop: 'name', order: 'asc' },
                 { text: 'Datumu izdavanja - opadajucem', prop: 'name', order: 'desc' }]; // itd...
  myPrescriptions;
  prescriptionList=[];
  
  searchPrescriptionsControl = new FormControl('');
  sortControl = new FormControl('');
  ngOnInit() {
    
    this.myPrescriptions = this.prescriptionService.getPrescriptionsByPacientId(this.userService.currentUser.id);
  }

  submit() {
    this.prescriptionList = new PropFilterPipe().transform(this.myPrescriptions, this.searchPrescriptionsControl.value, 'status');
  }

}
