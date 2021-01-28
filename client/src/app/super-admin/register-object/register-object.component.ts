import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PharmacyService } from 'app/service/entity-handling/pharmacy.service';
import { AddPharmacyDialogComponent } from './dialogs/add-pharmacy-dialog/add-pharmacy-dialog.component';

import { DermatologService } from 'app/service/entity-handling/dermatolog.service';
import { PharmacistService } from 'app/service/entity-handling/pharmacist.service';
import { AdminService } from 'app/service/entity-handling/admin.service';
@Component({
  selector: 'app-register-object',
  templateUrl: './register-object.component.html',
  styleUrls: ['./register-object.component.css']
})
export class RegisterObjectComponent implements OnInit {
  
  displayedPharmacyColumns = ['id' , 'name', 'adress','actions'];
  pharmacySource =[];
  constructor(private pharmacyService: PharmacyService,
    private dermatologService: DermatologService,
    private pharmacistService: PharmacistService,
    private adminService: AdminService,
    public dialog: MatDialog) { }
    pharmacists;
    dermatologs;
    admins;

  ngOnInit() {
    this.pharmacyService.getAll()
        .subscribe( data => this.pharmacySource = data);
    this.dermatologService.getAll()
        .subscribe( data => this.dermatologs = data);
    this.pharmacistService.getAll()
        .subscribe( data => this.pharmacists = data);
    this.adminService.getAvailableAdmins()
      .subscribe(data => this.admins = data)
  }
  openDialog(): void {
   
    const dialogRef = this.dialog.open(AddPharmacyDialogComponent, {
      width: '650px'  ,
      data : {
        'pharmacists' : this.pharmacists,
        'dermatologs' : this.dermatologs,
        'admins':  this.admins.length  === 0? undefined : this.admins,
      }
      
    });
    

    dialogRef.afterClosed().subscribe(result => {
      if( result)
        this.pharmacySource = result     
    });
  }


}
