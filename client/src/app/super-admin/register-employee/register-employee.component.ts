import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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


  displayComuns=  ['id', 'name', 'email', 'actions'];
  dataOptionsToDisplay;
  employeeSource = [];
  readyData;
  dataControl = new FormControl('');
  constructor(
    private apiService: ApiService,
    private confService: ConfigService,
    private pharmacyService: PharmacistService,
    public dialog: MatDialog
  ) { }
  pharmacyList
  ngOnInit() {
    this.dataOptionsToDisplay = this.apiService.getRoleOptions();
  }
  onAddAdmin(): void {

    const dialogRef = this.dialog.open(AddAdminDialogComponent, {
      width: '650px',
      data: {
        'availablePharmacyList': this.pharmacyList
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
       result.subscribe(data => this.employeeSource = data);
    });
  }
  onShowData() {

    if (this.dataControl.value === this.apiService.ADMIN) {
      this.apiService.get(this.confService.get_all_admins())
        .subscribe(data => this.employeeSource = data);

      this.pharmacyService.getPharmaciesWithouthAdmins()
        .subscribe(data => this.pharmacyList = data);
      this.readyData = true;

    } else if (this.dataControl.value === this.apiService.DERMATOLOG) {
      this.apiService.get(this.confService.get_all_dermatologs())
        .subscribe(data => this.employeeSource = data);
      this.readyData = true;

    } else if (this.dataControl.value === this.apiService.PHARMACIST) {
      this.apiService.get(this.confService.get_all_pharmacists())
        .subscribe(data => this.employeeSource = data);
      this.readyData = true;

    }
  }

}
