import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

// <app-medicines [medicines]="listaLekova"></ao

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css'],
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MedicinesComponent implements OnInit {

 // Input medicines: Medicine[];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.cdr.detectChanges();
  }

}
