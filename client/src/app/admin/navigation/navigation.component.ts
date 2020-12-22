import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, ConfigService, UserService } from 'app/service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() title:string;
  @Input() imgUrl:string;
  @Input() gotoUrl:string; 
  
  constructor(private authService : AuthService,
    private conf: ConfigService,
    private userService: UserService,
    private router: Router) {
  }
  ngOnInit() {
  }

  onClick(){
    this.router.navigate([this.gotoUrl]);
  }
}
