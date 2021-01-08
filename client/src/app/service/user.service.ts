import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser;

  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) {
  }

  initUser() {
    const promise = this.apiService.get(this.config.refresh_token_url).toPromise()
      .then(res => {
        if (res.access_token !== null) {
          return this.getMyInfo().toPromise()
            .then(user => {
              this.currentUser = user;
            });
        }
      })
      .catch(() => null);
    return promise;
  }
  checkRole(role){
    
    let bool = false;
    if(this.currentUser != null){            
      this.currentUser.authorities.forEach(element => {      
        if(element.authority === role){
          bool = true;
       }
      });         
    }
    return bool;
  }
  amIAdmin(){
    
    return this.checkRole("ROLE_ADMIN");
  }
  amIUser(){
    return this.checkRole("ROLE_USER");
  }
  amISuperAdmin(){
    return this.checkRole("ROLE_SUPER_ADMIN");
  }
  amIDermatolog(){
    return this.checkRole("ROLE_DERMATOLOG");
  }
  amIPharmacolog(){
    return this.checkRole("ROLE_PHARMACOLOG");
  }
  
  getMyId() {
    return this.apiService.get(this.config.whoami_url)
      .pipe(map(user => {
        this.currentUser = user;        
        return user.id;
      }));
  }

  setupUser(user) {
    this.currentUser = user;
  }

  getMyInfo() {
    return this.apiService.get(this.config.whoami_url)
      .pipe(map(user => {
        this.currentUser = user;
        return user;
      }));
  }

  getAll() {
    return this.apiService.get(this.config.users_url);
  }

}
