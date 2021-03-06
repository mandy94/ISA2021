import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  UserService } from 'app/service';
import { PharmacyService } from 'app/service/entity-handling/pharmacy.service';

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
    this.pharmacyService.getById(this.userService.getMyPharacyID())
                        .subscribe( data=>this.currentPharmacy = data);
  }
  goto(url) {
    this.router.navigate([url]);
  }

}

