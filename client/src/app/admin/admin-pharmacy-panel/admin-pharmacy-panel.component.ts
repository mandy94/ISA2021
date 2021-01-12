import { Component, OnInit } from '@angular/core';
import { PharmacyService, UserService } from 'app/service';

@Component({
  selector: 'app-admin-pharmacy-panel',
  templateUrl: './admin-pharmacy-panel.component.html',
  styleUrls: ['./admin-pharmacy-panel.component.css']
})
export class AdminPharmacyPanelComponent implements OnInit {

  constructor(private pharmacyService: PharmacyService, private userService: UserService) { }
  currentPharmacy;
  myId;
  ngOnInit(): void {
    this.myId = this.userService.getMyPharacyID();
     this.currentPharmacy = this.pharmacyService.getMyPharamcy(this.myId);
  }
 
}


