import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { MedicationService } from 'app/service/entity-handling/medication.service';

@Component({
  selector: 'app-add-medication-dialog',
  templateUrl: './add-medication-dialog.component.html',
  styleUrls: ['./add-medication-dialog.component.css']
})
export class AddMedicationDialogComponent implements OnInit {
    medTypeList;
    medShapeList;
    ingiridentList;
    manufacturersList;
    discountsList;
    sideEffesctList;
    replacementList;
  addMedicationGroup = new FormGroup({
    codeControl : new FormControl('', {validators: Validators.required}),
    nameControl: new FormControl('', {validators: Validators.required}),   
    typeControl: new FormControl('', {validators: Validators.required}),
    shapeControl: new FormControl('', {validators: Validators.required}),
    mandatoryPrescriptionControl:new FormControl('', {validators: Validators.required}),
    priceControl:new FormControl(0, {validators: Validators.required}),
    manufacturerControl : new FormControl('', {validators: Validators.required}),
    ingridientControl: new FormControl(''),
    discountControl: new FormControl(''),
    sideEffectControl: new FormControl([]),
    replacementControl :  new FormControl([]),
  });
  
  constructor(
    public dialogRef: MatDialogRef<AddMedicationDialogComponent>,
    private medicationService: MedicationService
  ) { }
 
  ngOnInit() {
    this.medTypeList = this.medicationService.getTypes();
    this.medShapeList = this.medicationService.getShapes();
    this.sideEffesctList = this.medicationService.getSideEffects();
    this.medicationService.getAllRegisteredMeds()
       .subscribe(data => this.replacementList = data);
    this.medicationService.getDiscounts()
         .subscribe(data => {this.discountsList =  data});
    this.medicationService.getManufacturers()
            .subscribe(data => this.manufacturersList = data)
    this.medicationService.getIngiridents()
           .subscribe(data => {this.ingiridentList = data, console.log(data)});
        
  }
  onCreate(){

      let newMed = {
        name: this.addMedicationGroup.value.nameControl,
        code : this.addMedicationGroup.value.codeControl,
        type : this.addMedicationGroup.value.typeControl,
        shape : this.addMedicationGroup.value.shapeControl,
        mandatoryPrescription :this.addMedicationGroup.value.mandatoryPrescriptionControl === "1"? true : false,
        initialPrice: this.addMedicationGroup.value.priceControl,
        ingredients : this.addMedicationGroup.value.ingridientControl,
        manufacturer: this.addMedicationGroup.value.manufacturerControl,
        activeDiscount: this.addMedicationGroup.value.discountControl,
        replacements: this.addMedicationGroup.value.replacementControl,
        sideEffects : this.addMedicationGroup.value.sideEffectControl
      }     
      this.medicationService.addNewMedication(newMed)
           .subscribe(data => this.dialogRef.close( data));     
  }
  onCancel(){}

}
