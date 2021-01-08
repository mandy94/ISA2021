import { Component, OnInit } from '@angular/core';
import { ConfigService, FooService, UserService } from '../service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fooResponse = {};
  whoamIResponse = {};
  allUserResponse = {};

  constructor(
    private config: ConfigService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getMyInfo();
  }

  isSignedAsAdmin() {
    return this.userService.amIAdmin();
  }
  isSignedAsUser(){
    return this.userService.amIUser();
  }
  isSignedAsDermatolog(){
    return this.userService.amIDermatolog();
  }
 
  isSignedAsSuperUser(){
  return this.userService.amISuperAdmin();
  }

 

  isSignedIn() {

    if (this.userService.currentUser != null)
      return true;
    else
      return false;
  }

}
