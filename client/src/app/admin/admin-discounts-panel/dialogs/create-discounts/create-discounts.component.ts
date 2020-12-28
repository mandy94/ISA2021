import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-discounts',
  templateUrl: './create-discounts.component.html',
  styleUrls: ['./create-discounts.component.css']
})
export class CreateDiscountsComponent implements OnInit {

  discountControl = new FormGroup({
  discountName: new FormControl(''), // oke 
  discountValue: new FormControl(''), // oke
  discountDesc: new FormControl(''), // oke
  discountType: new FormControl(''), // oke
  discountValidFrom: new FormControl(''), // oke
  discountValidUntil: new FormControl(''), // oke
  discountItem: new FormControl('') // oke 

  });
  constructor() { }
  types = [{ id: 1, description: 'Racunanje po popustu' },
  { id: 2, description: 'Fiksno oduzimanje od glavnice' }];
  medications = [
    { fullName: 'Paracetamol 150mg, 20 tableta' }
  ]
  onSubmit() {
    
    console.log(this.discountControl.value);
    this.notifyUsersViaEmail();
  }
  notifyUsersViaEmail(){

    // todo...
  }
  ngOnInit() {
  }

}
