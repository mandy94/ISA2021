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
    if(this.currentUser != null){      
      if( this.currentUser.work_role == role)
      return true;
    }
    return false;    
  }
  amIAdmin(){    
    return this.checkRole("Admin");
  }
  
  amIUser(){
    return this.checkRole("Pacient");
  }
  amISuperAdmin(){
    return this.checkRole("Superadmin");
  }
  amIDermatolog(){
    return this.checkRole("Dermatolog");
  }
  amIPharmacolog(){
    return this.checkRole("Farmaceut");
  }
  getMyPharacyID(){
   return 1;
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
      }));
  }

  getAll() {
    return this.apiService.get(this.config.users_url);
  }

}
