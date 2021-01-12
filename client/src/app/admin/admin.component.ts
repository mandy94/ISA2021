import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacyService, UserService } from 'app/service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentPharmacy;
  constructor(private pharmacyService: PharmacyService,
    private userService: UserService,
    private router: Router) {
  }
  ngOnInit() {
    this.currentPharmacy = this.pharmacyService.getMyPharamcy(this.userService.getMyPharacyID());
  }


  goto(url) {

    this.router.navigate([url]);

  }

}

