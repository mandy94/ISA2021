import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateDiscountsComponent } from './dialogs/create-discounts/create-discounts.component';

@Component({
  selector: 'app-admin-discounts-panel',
  templateUrl: './admin-discounts-panel.component.html',
  styleUrls: ['./admin-discounts-panel.component.css']
})
export class AdminDiscountsPanelComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  dummyPharmacy = {
    id: 2,
    name: 'Apoteka dobro srce',
    adress: 'Radnicka 23, Novi Sad',
    description: 'Neki opis apoteke'}
    selectedPharmacy =this.dummyPharmacy;
  
  // value, duration, type
  discounts = [
      {
        name: 'Sezonsko snizenje',        
        value: 10,
        description: 'Na odredjenje artikle ide 10% poopusta',
        duration : { startDate: '' , endDate:''},
        type: 'percentage' // enumType { percentage, total, fixPrice}
      }

      
  ]
  ngOnInit() {
  }
  createDiscount(): void {
    const dialogRef = this.dialog.open(CreateDiscountsComponent, {
      width: '550px'
      
    });

   
  }


}
