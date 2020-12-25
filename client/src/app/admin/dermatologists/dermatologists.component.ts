import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dermatologists',
  templateUrl: './dermatologists.component.html',
  styleUrls: ['./dermatologists.component.css']
})
export class DermatologistsComponent implements OnInit {

  constructor(   private route: ActivatedRoute,
    private router: Router ) { }
   data;
  ngOnInit() {
   
   console.log(this.data);
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params['data']);
    });

  }

}
