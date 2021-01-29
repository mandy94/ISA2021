import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { MedicationService } from 'app/service/entity-handling/medication.service';

@Component({
  selector: 'app-add-medication-dialog',
  templateUrl: './add-medication-dialog.component.html',
  styleUrls: ['./add-medication-dialog.component.css']
})
export class AddMedicationDialogComponent implements OnInit {

  addMedicationGroup = new FormGroup({
    codeControl : new FormControl(''),
    nameControl: new FormControl(''),   
    typeControl: new FormControl(''),
    shapeControl: new FormControl(''),
    mandatoryPrescriptionControl:new FormControl(''),
    priceControl:new FormControl(0),
    manufacturerControl : new FormControl(''),
    ingridientControl: new FormControl(''),
    discountControl: new FormControl(''),
  });
  medTypeList;
  medShapeList;
  ingiridentList;
  manufacturersList;
  discoutsList
  constructor(
    public dialogRef: MatDialogRef<AddMedicationDialogComponent>,
    private medicationService: MedicationService
  ) { }
 
  ngOnInit() {
    this.medTypeList = this.medicationService.getTypes();
    this.medShapeList = this.medicationService.getShapes();
    this.medicationService.getDiscounts()
         .subscribe(data => this.discoutsList =  data);
    this.medicationService.getManufacturers()
            .subscribe(data => this.manufacturersList = data)
    this.medicationService.getIngiridents()
           .subscribe(data => this.ingiridentList = data);
  }
  onCreate(){
      let newMed = {
        name: this.addMedicationGroup.value.nameControl,
        code : this.addMedicationGroup.value.codeControl,
        type : this.addMedicationGroup.value.typeControl,
        shape : this.addMedicationGroup.value.shapeControl,
        mandatoryPrescription :this.addMedicationGroup.value.mandatoryPrescriptionControl === 1? true : false,
        price: this.addMedicationGroup.value.priceControl,
        ingredients : [],
        manufacturer: null,
        activeDiscount: null,
        replacements: []

      }     
      this.medicationService.addNewMedication(newMed)
           .subscribe(data => this.dialogRef.close( data));
       
      

  }
  onCancel(){}

}
