import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MedicationService } from 'app/service/entity-handling/medication.service';
import { ConfirmationDialogComponent } from 'app/shared/dialogs/confirmation-dialog/confirmation-dialog.component';
import { AddMedicationDialogComponent } from './dialogs/add-medication-dialog/add-medication-dialog.component';
import { EditMedicineDialogComponent } from './dialogs/edit-medicine-dialog/edit-medicine-dialog.component';

@Component({
  selector: 'app-register-medication',
  templateUrl: './register-medication.component.html',
  styleUrls: ['./register-medication.component.css']
})
export class RegisterMedicationComponent implements OnInit {

  medicationSource;
  displayedMedicationColumns = ['id', 'name', 'type', 'mandatoryPrescription', 'price', 'actions']
  constructor(
    private medicationService: MedicationService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.medicationService.getAllRegisteredMeds().subscribe(data => this.medicationSource = data);
  }
  onCreate() {
    const dialogRef = this.dialog.open(AddMedicationDialogComponent, {
      width: '780px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result)
       this.medicationSource = result;
     
    });
  }

  onEdit(item) {
    const dialogRef = this.dialog.open(EditMedicineDialogComponent, {
      width: '450px',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  onDelete(item) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data: { maintext: 'Da li ste sigurni da zelite odbrisete lek ' + item.name + '?', }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.medicationService.deleteMedication(item.id)
          .subscribe(data => this.medicationSource = data);

    });
  }

}
