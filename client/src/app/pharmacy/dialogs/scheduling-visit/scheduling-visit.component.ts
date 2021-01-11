import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DermatologService } from 'app/service/dermatolog.service';

@Component({
  selector: 'app-scheduling-visit',
  templateUrl: './scheduling-visit.component.html',
  styleUrls: ['./scheduling-visit.component.css']
})
export class SchedulingVisitComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SchedulingVisitComponent>,
    private dermatologService: DermatologService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    dermatolog;

    ngOnInit() {
      this.dermatolog = this.dermatologService.getById(this.data);
     console.log(this.data);
    
    }
    onNoClick(): void {
      this.dialogRef.close();
    }



}
