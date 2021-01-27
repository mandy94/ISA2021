import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService, ConfigService } from 'app/service';

@Component({
  selector: 'app-add-admin-dialog',
  templateUrl: './add-admin-dialog.component.html',
  styleUrls: ['./add-admin-dialog.component.css']
})
export class AddAdminDialogComponent  {
  newAddminGroup = new FormGroup({
    firstnameControl : new FormControl(''),
    lastnameControl : new FormControl(''),
    usernameControl : new FormControl(''),
    passwordControl : new FormControl(''),
    passwordAgainControl : new FormControl(''),
    pharmacyControl : new FormControl(''),
    emailFormControl : new FormControl('', [
      Validators.required,
      Validators.email,
    ]),

  });
    
  constructor(
    private apiService: ApiService,
    private configService: ConfigService,
    public dialogRef: MatDialogRef<AddAdminDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  
    onAdd(){
      let admin = {
        firstname : this.newAddminGroup.value.firstnameControl,
        lastname : this.newAddminGroup.value.lastnameControl,
        password : this.newAddminGroup.value.passwordControl,
        pharmacyId : this.newAddminGroup.value.pharmacyControl.id,
        email: this.newAddminGroup.value.emailFormControl,
        username : this.newAddminGroup.value.usernameControl,

      }
      console.log(admin);
      this.dialogRef.close(this.apiService.post( this.configService._add_new_admin, admin));
    }
    onNoClick(): void {
      this.dialogRef.close();
    }

}
