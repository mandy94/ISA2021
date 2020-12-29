import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-alergen',
  templateUrl: './add-alergen.component.html',
  styleUrls: ['./add-alergen.component.css']
})
export class AddAlergenComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddAlergenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ripOffIDs(list) {
    let newList = []
    list.forEach(element => {
      newList.push(element.name);
    });
    return newList;
  }
  ripOffAlergens = this.ripOffIDs(this.data.known_alergens);

  onNoClick(): void {
    this.dialogRef.close();
  }
  cancel(){
    this.dialogRef.close();
  }
  saveChanges() {
    this.data.known_alergens.splice(0, this.data.known_alergens.length);
    this.data.all_alegerns.forEach(element => {
      if (this.ripOffAlergens.includes(element.name)) {
        console.log(element)
        this.data.known_alergens.push(element);
      }
    });
    this.dialogRef.close();    
  }

  ngOnInit() {
  }

}
