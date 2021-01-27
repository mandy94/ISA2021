import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/service';
import { PharmacyService } from 'app/service/entity-handling/pharmacy.service';

@Component({
  selector: 'app-admin-pharmacy-panel',
  templateUrl: './admin-pharmacy-panel.component.html',
  styleUrls: ['./admin-pharmacy-panel.component.css']
})
export class AdminPharmacyPanelComponent implements OnInit {

  constructor(private pharmacyService: PharmacyService, private userService: UserService) { }
  currentPharmacy;
  dermatologs;
  ngOnInit(): void {
    let pharmacyId = this.userService.getMyPharacyID();

    this.pharmacyService.getById(pharmacyId)
      .subscribe(data => {
        this.currentPharmacy = data;
        
        this.pharmacyService.getDermatologsByPharmacyId(pharmacyId)
          .subscribe(data => 
            this.dermatologs = data);
      }
      );
  }
}


