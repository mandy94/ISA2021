import { Route } from '@angular/compiler/src/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, AuthService, ConfigService, UserService } from 'app/service';

@Component({
  selector: 'app-api-card',
  templateUrl: './api-card.component.html',
  styleUrls: ['./api-card.component.scss']
})
export class ApiCardComponent implements OnInit {

  @Input() title: string;
  @Input() imgUrl: string;
  @Input() content: string;
  @Input() username: string;
  @Input() password: string;

  logged = false;

  constructor(private authService: AuthService,
    private conf: ConfigService,
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit() {
  }

  onButtonClick() {
    var body = {
      "username": this.username,
      "password": this.password
    };
    this.authService.login(body)
      .subscribe(() => {
        this.userService.getMyInfo().subscribe();
        this.router.navigate(['/']);
      });
  }


}
