import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.userService.currentUser;
    const currentRouteFullUrl = state.url;

    if (user && user.firstTimeLogin && currentRouteFullUrl.indexOf('change-password') === -1) {
      this.router.navigate(['/change-password']);
      return false;
    }

    
    if (user) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
