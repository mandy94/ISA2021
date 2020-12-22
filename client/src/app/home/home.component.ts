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
  }

  isSignedAsAdmin() {
    return this.userService.amIAdmin();
  }
  test;

  isSignedIn() {

    if (this.userService.currentUser != null)
      return true;
    else
      return false;
  }

}
