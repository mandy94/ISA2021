import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService, ConfigService } from 'app/service';
import { PharmacistService } from 'app/service/entity-handling/pharmacist.service';
import { AddAdminDialogComponent } from './dialogs/add-admin-dialog/add-admin-dialog.component';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  displayedAdminsColumns =[ 'id', 'name', 'pharmacy', 'actions'];
  adminSource=[];
  constructor(
    private apiService: ApiService,
    private confService: ConfigService,
    private pharmacyService: PharmacistService,
    public dialog: MatDialog
  ) { }
  pharmacyList
  ngOnInit() {
    this.apiService.get( this.confService.get_all_admins())
      .subscribe(data => this.adminSource = data);
      
      this.pharmacyService.getPharmaciesWithouthAdmins()
      .subscribe(data => this.pharmacyList = data);
  }
  openDialog(): void {
  
      const dialogRef = this.dialog.open(AddAdminDialogComponent, {
        width: '650px'  ,
        data : {
          'availablePharmacyList' : this.pharmacyList
        }        
      });

    dialogRef.afterClosed().subscribe(result => {
       result.subscribe(data => this.adminSource=data);
    });
  }

}
