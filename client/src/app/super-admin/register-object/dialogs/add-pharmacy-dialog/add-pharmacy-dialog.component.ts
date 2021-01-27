import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PharmacistService } from 'app/service/entity-handling/pharmacist.service';

@Component({
  selector: 'app-add-pharmacy-dialog',
  templateUrl: './add-pharmacy-dialog.component.html',
  styleUrls: ['./add-pharmacy-dialog.component.css']
})
export class AddPharmacyDialogComponent {

  addPharmacyGroup = new FormGroup({
    nameControl : new FormControl(''),
    adressControl : new FormControl(''),
    adminControl : new FormControl({}),
    pharmacistsControl : new FormControl([]),
    dermatologsControl : new FormControl([])
  });
  constructor(
    public dialogRef: MatDialogRef<AddPharmacyDialogComponent>,
    private pharmacyService: PharmacistService,
    @Inject(MAT_DIALOG_DATA) public data: any,) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  addPharmacy(){
    let newPharmacy = {
      name : this.addPharmacyGroup.value.nameControl,
      adress : this.addPharmacyGroup.value.adressControl,
      adminId : this.addPharmacyGroup.value.adminControl.id,
      employee : this.addPharmacyGroup.value.pharmacistsControl.concat( this.addPharmacyGroup.value.dermatologsControl),     
      
    }          
    
    this.pharmacyService.add_new_pharmacy(newPharmacy)
        .subscribe(data=> this.dialogRef.close(data));
      
  }
  canSubmit(){
    if(this.data.admins)
      return true;
      else
      return false;
  }
}
